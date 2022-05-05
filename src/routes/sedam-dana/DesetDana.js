import React from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import { useHistory } from "react-router-dom";

import { selectNizPoDanima } from "../../features/weatherSlice";

import Dan from "./Dan";

export const getMesec = (moonNomber) => {
  switch (moonNomber) {
    case 0: {
      return "Januar";
    }
    case 1: {
      return "Februar";
    }
    case 2: {
      return "Mart";
    }
    case 3: {
      return "April";
    }
    case 4: {
      return "Maj";
    }
    case 5: {
      return "Jun";
    }
    case 6: {
      return "Jul";
    }
    case 7: {
      return "Avgust";
    }
    case 8: {
      return "Septembar";
    }
    case 9: {
      return "Oktobar";
    }
    case 10: {
      return "Novembar";
    }
    case 11: {
      return "Decembar";
    }
    default: {
      return "Pogrešan mesec";
    }
  }
};

export default function DesetDana(props) {
  const history = useHistory();
  const daniUNizu = useSelector(selectNizPoDanima);

  const prikazUListi = daniUNizu.slice(0, 8).map((dan, i) => {
    return <Dan key={i} dan={dan} i={i} />;
  });

  function handleClick() {
    props.onChange("po-satima");
    history.push("/po-satima");
  }

  return (
    <div className="container" style={{ maxWidth: "680px" }}>
      <Accordion defaultActiveKey="0">{prikazUListi}</Accordion>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={handleClick}
      >
        Vreme za sledeća 24 sata
      </button>
    </div>
  );
}
