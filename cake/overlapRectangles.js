/**
 * To find intersection of the rectangales 
 * 
 */

findXOverlap = (axis1, axis2, prop) => {
    let overlap = false;
    let highestStartAxis = ( axis1.x < axis2.x) ? axis1 : axis2 ;
    let lowestStartAxis =  ( axis1.x > axis2.x) ? axis1 : axis2 ;

    if(highestStartAxis.x + highestStartAxis[prop] > lowestStartAxis.x ) {
        overlap  = 'partial';
        // highest overlaps the lowest
        // Now check if complete overlap
        
        if(highestStartAxis.x + highestStartAxis[prop] > lowestStartAxis.x + lowestStartAxis[prop]) {
            //complete overlap
            overlap = 'complete';
        } 
    } else if(lowestStartAxis.x > highestStartAxis.x + highestStartAxis[prop]) {
        // no overlap
        overlap = false;
    }

    return overlap
}

let rectangle1  = {
    x : 2,
    y : 1,
    width :4,
    height: 4
}
let rectangle2 = {
    x: 3,
    y: 1,
    width: 2,
    height: 10
}


console.log(findXOverlap(rectangle1, rectangle2 , 'width'));


// Solution 
function findRangeOverlap(point1, length1, point2, length2) {

    // find the highest start point and lowest end point.
    // the highest ("rightmost" or "upmost") start point is
    // the start point of the overlap.
    // the lowest end point is the end point of the overlap.
    var highestStartPoint = Math.max(point1, point2);
    var lowestEndPoint = Math.min(point1 + length1, point2 + length2);

    // return null overlap if there is no overlap
    if (highestStartPoint >= lowestEndPoint) {
        return {startPoint: null, overlapLength: null};
    }

    // compute the overlap length
    var overlapLength = lowestEndPoint - highestStartPoint;

    return {startPoint: highestStartPoint, overlapLength: overlapLength};
}

function findRectangularOverlap(rect1, rect2) {

    // get the x and y overlap points and lengths
    var xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
    var yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

    // return null rectangle if there is no overlap
    if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
        return {
            leftX: null,
            bottomY: null,
            width: null,
            height: null,
        };
    }

    return {
        leftX: xOverlap.startPoint,
        bottomY: yOverlap.startPoint,
        width: xOverlap.overlapLength,
        height: yOverlap.overlapLength,
    };
}

rectangle1  = {
    leftX : 2,
    bottomY : 1,
    width :4,
    height: 4
}
rectangle2 = {
    leftX: 3,
    bottomY: 1,
    width: 2,
    height: 4
}


console.log(findRectangularOverlap(rectangle1, rectangle2));

