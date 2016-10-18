import * as React from "react";

interface NavItem {
   text: string;
   href: string;
}

export interface NavGroup {
   name: string;
   items: Array<NavItem>;
}

interface NavProps {
   navigators: Array<NavGroup>;
}

export class Navigator extends React.Component<NavProps, {}> {
   render() {
      console.log(this.props.navigators);
      return (
         <div>
         {
            this.props.navigators.map(function(item, index) {
               console.log(item);
               return <dl key={index}></dl>;
            })
         }
         </div>
      );
   }
}