import React from "react";

import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <h2>Módulo: {activeModule.title}</h2>
    <p>Aula: {activeLesson.title}</p>
    <br />
  </div>
);

export default connect((state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
