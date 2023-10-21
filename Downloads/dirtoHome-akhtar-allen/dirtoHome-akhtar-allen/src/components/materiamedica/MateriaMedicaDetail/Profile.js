import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ItemList from "../../../layouts/ItemList";
import { useGetMateriaMedicaQuery } from "../../../redux/materiaMedica/materiaMedicaApi";

export default function Profile() {
  const { id } = useParams();
  const {
    data: acupuncture,
    isLoading,
    isError,
  } = useGetMateriaMedicaQuery(id);

  let content;
  if (isLoading) {
    content = <h3>Loading...</h3>;
  }

  if (isError) {
    content = <h3>Something went wrong!</h3>;
  }

  if (!isLoading && !isError && !acupuncture._id) {
    content = <h3>Data is empty!</h3>;
  }

  if (!isLoading && !isError && acupuncture._id) {
    content = (
      <ul>
        <ItemList
          listName="Physical Location"
          value={acupuncture.physicalLocation}
        />
        <ItemList listName="Five Element" value={acupuncture.fiveElement} />
        <ItemList listName="Horary Cycle" value={acupuncture.horarycycle} />
        <ItemList listName="Functionality" value={acupuncture.functionality} />
        <ItemList listName="Meridian" value={acupuncture.meridian} />
        <ItemList listName="Element" value={acupuncture.element} />
      </ul>
    );
  }

  return content;
}
