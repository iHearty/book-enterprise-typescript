import * as React from "react";

export interface _Hello {
   compiler: string;
   framework: string;
}

export class Hello extends React.Component<_Hello, {}> {
   render() {
      return <h1>Hello from {this.props.compiler}and {this.props.framework}!</h1>;
   }
}