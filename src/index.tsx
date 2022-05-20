import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Concurrency} from './Concurrency';
import {Batching} from './Batching';
import {UseId} from './UseId';
import {DOM} from './DOM';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to={"/concurrency"} replace/>}/>
                <Route path="/concurrency" element={<Concurrency/>}/>
                <Route path="/batching" element={<Batching/>}/>
                <Route path="/use_id" element={<UseId/>}/>
                <Route path="dom" element={<DOM/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
