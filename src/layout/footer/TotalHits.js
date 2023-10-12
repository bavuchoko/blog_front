import React from 'react';

function TotalHits(props) {
    const total={
        total:1412341,
        today:123,
        yesterday:323
    }

    return (
        <div>
            <p className="total">{total.total.toLocaleString()}</p>
            <div>
                <span className="dayCount">Today</span>
                <span className="dayCount right">{total.today.toLocaleString()}</span>
            </div>
            <div>
                <span className="dayCount">Yesterday</span>
                <span className="dayCount right">{total.yesterday.toLocaleString()}</span>
            </div>
        </div>
    );
}

export default TotalHits;