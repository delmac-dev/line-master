export const generatePoints = (row =10, column = 10, interval = 50) => {
    let list = [];
    let rowIndex = 0;
    let columnIndex = 0;
    for (i = 1; i <= row * column; i++) {
        rowPosition = -9 + interval * rowIndex;
        columnPosition = -9 + interval * columnIndex;

        //the point dictionnary
        let point = {};
        point["id"] = i;
        point["top"] = rowPosition;
        point["left"] = columnPosition;
        point["pair"] = [];
        point["boxes"] = [];

        // PairTop
        rowIndex != 0 ? point.pair.push(i - column) : "";
        // PairBottom
        rowIndex != row - 1 ? point.pair.push(i + column) : "";
        // PairLeft
        columnIndex != 0 ? point.pair.push(i - 1) : "";
        // PairRight
        columnIndex != column - 1 ? point.pair.push(i + 1) : "";

        // BoxTopLeft
        rowIndex != 0 && columnIndex != 0 ? point.boxes.push(i - (column + rowIndex)) : "";
        // BoxTopRight
        rowIndex != 0 && columnIndex != column - 1 ? point.boxes.push(i - (column + rowIndex) + 1) : "";
        // BoxBottomleft
        rowIndex != row - 1 && columnIndex != 0 ? point.boxes.push(i - (column + rowIndex) + (column - 1)) : "";
        // BoxBottomRight
        rowIndex != row - 1 && columnIndex != column - 1 ? point.boxes.push(i - (column + rowIndex) + 1 + (column - 1)) : "";

        columnIndex += 1;
        if (i % column == 0) {
            rowIndex += 1;
            columnIndex = 0;
        }

        list.push(point);
    }

    return list;
};

export const generateBoxes = (row = 9, column= 9) => {
    let list = [];
    for (i = 1; i <= row * column; i++) {
        box = {};
        box["id"] = i;
        box["count"] = 0;
        box["owner"] = null;

        list.push(box);
    }
    return list;
};

export const generateLines = () => {

};