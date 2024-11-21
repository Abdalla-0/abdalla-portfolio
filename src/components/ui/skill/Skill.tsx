// import { useAppDispatch, useAppSelector } from "@store/hook";
import styles from "./styles.module.css";
import { Col, Row } from "react-bootstrap";
// import { useEffect } from "react";
// import { actGetSkills } from "@store/skills/skillsSlice";
import { GridList } from "@components/common";

const { skill, imgBox, title } = styles;
const Skill = () => {
  // const dispatch = useAppDispatch();
  // const { data } = useAppSelector((state) => state.skills);

  const data = [
    { id: 1, img: "/img/skills/figma.png", title: "Figma" },
    { id: 2, img: "/img/skills/html.png", title: "HTML" },
    { id: 3, img: "/img/skills/css.png", title: "CSS" },
    { id: 4, img: "/img/skills/sass.png", title: "SASS" },
    { id: 5, img: "/img/skills/js.png", title: "JavaScript" },
    { id: 6, img: "/img/skills/react.png", title: "React" },
    { id: 7, img: "/img/skills/ts.png", title: "TypeScript" },
    { id: 8, img: "/img/skills/blade.png", title: "Laravel" },
  ];

  // useEffect(() => {
  //   dispatch(actGetSkills());
  // }, [dispatch]);

  return (
    <Row>
      <GridList
        data={data}
        renderItem={(item) => (
          <Col key={item.id} xs={6} md={4} lg={3}>
            <div className={skill}>
              <div className={imgBox}>
                <img src={item.img} alt="" />
              </div>
              <h3 className={title}>{item.title}</h3>
            </div>
          </Col>
        )}
      ></GridList>
    </Row>
  );
};

export default Skill;
