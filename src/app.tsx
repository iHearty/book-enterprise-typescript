import './app.scss';

import * as React from 'react';

import { Navigator, NavGroup } from './navigator/Navigator';

export class App extends React.Component<any, any> {

   constructor(props: any) {
      super(props);
   }

   render() {
      return <div className="app-wrapper">
         <header></header>
         <main>
            <div className="navigator-container">
            </div>
            <div className="main-container">
            </div>
         </main>
         <footer></footer>
      </div>;
   }
}