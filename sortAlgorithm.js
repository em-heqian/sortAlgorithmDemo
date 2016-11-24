
//插入排序
function insertSort(A){
	for (var i = 0; i < A.length; i++) {
		var k = A[i];
		for (var j = i - 1; j >= 0 && A[j] > k; j--) {
			//前面比自己大的元素依次向后移，直到空出一个"坑"
			A[j+1] = A[j];
		};

		if (A[j+1] != k) {
			//把目标元素插入"坑"中
			A[j+1] = k
		};
	};

	return A;
}


//主分支
var arr = [1,2,3,2,3,4,666,66,72,5,2,4,6,8,1];
insertSort(arr);