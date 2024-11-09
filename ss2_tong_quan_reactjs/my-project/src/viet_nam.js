import React from "react";
export class viet_nam extends React.Component {
    render() {
        const element1 = React.createElement(
            'li',
            null,
            'Hà Nội',
        );
        const element2 = React.createElement(
            'li',
            null,
            'Đà Nẵng',
        );
        const element3 = React.createElement(
            'li',
            null,
            'Hải Phòng',
        );
        const element4 = React.createElement(
            'li',
            null,
            'Hồ Chí Minh',
        );
        const element5 = React.createElement(
            'li',
            null,
            'Cần Thơ',
        );
        const divElement = React.createElement(
            'ul',
            null,
            element1,
            element2,
            element3,
            element4,
            element5
        );
        return divElement;
    }
}
