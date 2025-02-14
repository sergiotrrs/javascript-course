import "./footer.css";

const coloresVivos = {
  color: "green",
  backgroundColor: "yellow",
  fontSize: "30px",
  fontFamily: "Arial",
};

const coloresNeutros = {
  color: "black",
  backgroundColor: "white",
  fontSize: "18",
  fontFamily: "Times New Roman",
};




          //        { year, cohorte }
export const Footer = ( { year , cohorte:ch, inLove }  ) => {
  return (
    <>
      <p className="textFooter">Footer de mi aplicación</p>
      <p style = { {color: "yellow", fontFamily: "Arial" } } >Año {year}, Cohorte {ch}</p>
      <p style = { inLove ? coloresVivos : coloresNeutros  }  >Feliz 14 de febrero, también el 15, 16 y todos días</p>
      { /* Frase para enamorar, agregar estilo inline */}
      <p> </p>
    </>
  );
};
