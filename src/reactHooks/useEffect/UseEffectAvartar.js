import React, { useEffect, useState } from "react";

const UseEffectAvartar = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);

  const hadleAvartar = (e) => {
    const file = e.target.files[0];
    console.log(URL.createObjectURL(file));
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  return (
    <div>
      <input type="file" onChange={hadleAvartar} />
      {image && <img src={image.preview} width="80%" />}
    </div>
  );
};

export default UseEffectAvartar;
