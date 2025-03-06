function isBoomerang(points: number[][]): boolean {
    if(points.length!=3){
        return null
    }

    if(points[0][0] == points[1][0] && points[0][1] == points[1][1]){
        return false
    }

    if(points[1][0] == points[2][0] && points[1][1] == points[2][1]){
        return false
    }

    if(points[0][0] == points[2][0] && points[0][1] == points[2][1]){
        return false
    }

    let vectorA = [points[1][0]-points[0][0],points[1][1]-points[0][1]]
    let vectorB = [points[2][0]-points[0][0],points[2][1]-points[0][1]]

    console.log({vectorA,vectorB})

    if(vectorA[0]/vectorA[1] === vectorB[0]/vectorB[1] || vectorA[1]/vectorA[0] === vectorB[1]/vectorB[0]){
        return false
    }
    return true
};