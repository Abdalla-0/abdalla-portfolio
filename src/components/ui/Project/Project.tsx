// import { useAppDispatch } from "@store/hook";
import styles from "./styles.module.css";
// import { useEffect } from "react";
// import { actGetProjects } from "@store/projects/projectsSlice";
import { Col, Row } from "react-bootstrap";
import { GridList } from "@components/common";

const { project, imgBox, text, title, tale } = styles;
const Project = () => {
  // const dispatch = useAppDispatch();
  // const { data } = useAppSelector((state) => state.projects);
  const data = [
    {
      id: 1,
      img: "/img/projects/e-commerce.png",
      title: "Eccomerce",
      description:
        "Your one-stop shop for quality products, exclusive deals, and seamless online shopping",
    },
    {
      id: 2,
      img: "/img/projects/drinks.png",
      title: "How to make drinks",
      description:
        "Discover unique recipes, mixology tips, and the art of crafting perfect drinks for every occasion",
    },
    {
      id: 3,
      img: "/img/projects/sweet.png",
      title: "How to make desert",
      description:
        "Indulge in delicious dessert recipes, baking tips, and sweet inspiration for every occasion",
    },
    {
      id: 4,
      title: "Safety Code",
      img: "/img/projects/programming.png",
      description:
        "Professional programming solutions tailored to elevate your business with custom development, expert consulting, and innovative technology",
    },
  ];
  // useEffect(() => {
  //   dispatch(actGetProjects());
  // }, [dispatch]);

  return (
    <Row>
      <GridList
        data={data}
        renderItem={(item) => (
          <Col key={item.id} md={6}>
            <div className={project}>
              <div className={imgBox}>
                <img src={item.img} alt="" />
              </div>
              <div className={imgBox}>
                <img src={item.img} alt="" />
              </div>
              <div className={text}>
                <h3 className={`${title}`}>{item.title}</h3>
                <p className={tale}>{item.description}</p>
              </div>
            </div>
          </Col>
        )}
      ></GridList>
    </Row>
  );
};

export default Project;
