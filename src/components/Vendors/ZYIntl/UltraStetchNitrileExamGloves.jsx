const productImages = [
  "1521698358257_.pic.jpg",
  "1511698358257_.pic.jpg",
  "1531698358257_.pic.jpg",
  "1551698358257_.pic.jpg",
  "1541698358257_.pic.jpg",
  "1561698358257_.pic.jpg",
  "1491698358257_.pic.jpg",
  "1501698358257_.pic.jpg",
];
export default function UltraStretchNitrileExamGloves() {
  return (
    <>
      <h3>Ultra Stretch Nitrile Exam Gloves</h3>
      <div className="row">
        {productImages.map((image) => (
          <img
            key={image}
            src={`/assets/images/ultra-strech-nitrile-exam-gloves/${image}`}
            alt="Ultra Stretch Nitrile Exam Gloves"
            className="rounded mb-3 col-12 col-sm-6"
          />
        ))}
      </div>
      <div>
        <ul>
          <li>Powder Free/Latex Free</li>
          <li>Chemo Rated</li>
          <li>Non-Sterile</li>
          <li>Finger Texture</li>
          <li>Ambidextrous</li>
          <li>Ultra Soft</li>
        </ul>
      </div>
    </>
  );
}
