import React, { Component, createElement, useRef } from "react";
import classNames from "classnames";

export class EmulatorWidgetComponent extends Component {
    constructor(props) {
        super(props);
        //this.canvasRef = React.createRef();
    }

    // componentDidMount() {
    //   const canvas = this.canvasRef.current;
    //   const ctx = canvas.getContext("2d");
    //   ctx.fillStyle = "blue";
    //   ctx.fillRect(0, 0, 100, 50);
    // }

    render() {
        //return <div className="widget-hello-world">Hello {this.props.filePath}</div>;
        const className = classNames("emulator-widget", this.props.className);
        return <canvas className={className} />;
    }
}
