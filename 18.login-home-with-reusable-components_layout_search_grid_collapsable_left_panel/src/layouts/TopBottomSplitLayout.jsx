import React from 'react';
import './TopBottomSplitLayout.css';

export function TopBottomSplitLayout({ topContent, bottomContent }) {
    return (
        <div className="split-screen-container">
            <div className="top-section">
                {topContent}
            </div>
            <div className="separator"></div>
            <div className="bottom-section">
                {bottomContent}
            </div>
        </div>
    );
}
