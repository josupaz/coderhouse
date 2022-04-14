import React, { useState } from "react";
import "./styles.css";
import { db } from "../../Firebase/config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  writeBatch,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import CardPayment from "../CardPayment";

const Checkout = ({ handleClose, cart, total, clear }) => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || dni === "") {
      return;
    }
    const orderGenerada = {
      comprador: {
        nombre: nombre,
        dni: dni,
      },
      articulos: cart,
      total: total,
      createdAt: new Date().toLocaleString(),
    };

    //Primer paso: abrir un batch
    const batch = writeBatch(db); //ver en qué level colocarlo

    //Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = [];
    console.log(cart);
    //Chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
    cart.forEach((prod) => {
        console.log(prod);
      getDoc(doc(db, "productos", prod.id)).then((documentSnapshot) => {
        if (documentSnapshot.data().stock >= prod.quantity) {
          batch.update(doc(db, "productos", documentSnapshot.id), {
            stock: documentSnapshot.data().stock - prod.quantity,
          });
        } else {
          outOfStock.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        }
        console.log(outOfStock);

        if (outOfStock.length === 0) {
          addDoc(collection(db, "ordenes"), orderGenerada)
            .then(({ id }) => {
              batch.commit().then(() => {
                alert("Se genero la order con id: " + id);
                clear();
                navigate(`/postorder`);
              });
            })
            .catch((err) => {
              console.log(`Error: ${err.message}`);
            });
        } else {
          let mensaje = "";
          for (const producto of outOfStock) {
            mensaje += `${producto.name} `;
          }
          alert(`Productos fuera de stock: ${mensaje}`);
        }
      });
    });
  };

  return (
    <div className="modalContainer">
      <div className="modal">
        <button
          className="btn btn-large btn-danger btn-checkout"
          onClick={handleClose}
        >
          X
        </button>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Nombre"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            placeholder="Dni"
            id="dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Confirmar compra
          </button>
        </form>

        <CardPayment></CardPayment>
      </div>
    </div>
  );
};

export default Checkout;
