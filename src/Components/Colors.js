import React, { Component } from 'react';
import { Footer } from './Common/Footer.js';
import './Colors.css';
import './Common/Footer.css';

export default class Colors extends Component {
  render() {
    const palette = {
      shade: [
        '#d42320',
        '#c3201d',
        '#b21d1b',
        '#a11b18',
        '#901816',
        '#7f1513',
        '#6e1210',
        '#5d0f0e',
        '#4c0d0b',
        '#3b0a09',
        '#2a0706',
        '#190404',
        '#080101',
      ],
      tone: [
        '#900502',
        '#8a0a08',
        '#85100d',
        '#7f1513',
        '#791a19',
        '#74201e',
        '#6e2524',
        '#692b29',
        '#63302f',
        '#5d3535',
        '#583b3a',
        '#524040',
        '#4c4646',
      ]
    }
    const shadeColorBlocks =  palette.shade.map(
        (color, key) => {
          return <li key={key} className='colorItem' style={{'backgroundColor': color}}>{color}</li>;
        }
      );
      const toneColorBlocks =  palette.tone.map(
          (color, key) => {
            return <li key={key} className='colorItem' style={{'backgroundColor': color}}>{color}</li>;
          }
        );

    return (
      <div className="color">
        <div className="colorsPage">
          <p>Red Safety Colors</p>
          <div className="colorSwatches">
            <ul>
              {shadeColorBlocks}
            </ul>
            <ul>
              {toneColorBlocks}
            </ul>
          </div>
        </div>
        <Footer class="footer" />
      </div>
    )
  }
}
