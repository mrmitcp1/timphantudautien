function findFirstOccurrence(numbers, target) {
    var low = 0;
    var high = numbers.length - 1;
    var result = -1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (numbers[mid] === target) {
            result = mid;
        }
        else if (target < numbers[mid]) {
            high = mid - 1;
        }
        else
            high = mid + 1;
    }
    return result;
}
var data = [1, 1, 2, 3, 4, 5, 7];
var target = 3;
var index = findFirstOccurrence(data, target);
if (index !== -1) {
    console.log("phan tu ".concat(target, " xuat hien dau tien tai vi tri ").concat(index));
}
else {
    console.log("phan ti ".concat(target, " khong ton tai"));
}
