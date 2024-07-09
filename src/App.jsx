import { useState } from 'react';
import './style/App.css';
import { SidebarItem } from './sdk/sdk';
import { Remark } from 'react-remark';
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (<>
    <div id="nav">

    </div>
    <div id="sidebar">
      <SidebarItem title="Test01" url="test-01" />
    </div>
    <div id="contents">
      <div className='contentWrapper'>
        <Routes>
          <Route 
          exact path='/'
          element={<>
            <Remark>{`
# Test 01
## This is just a test of remark and other shit
---
I really hope this works. i will be sad if it doesn't
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
            `}</Remark>
          </>}/>
        </Routes>
      </div>
    </div>
  </>)
}

export default App
