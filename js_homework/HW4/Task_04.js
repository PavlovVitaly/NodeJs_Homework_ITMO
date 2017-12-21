function SortArr(){
    var inputArr = [12,2,4,3,10,1,20];
    var lo = 0;
    var hi = inputArr.length-1;
    QuickSort(inputArr, lo, hi);
    alert(inputArr);
}

function QuickSort(A, lo, hi){
    if(lo < hi){
        var supportElem = Partition(A, lo, hi);
        QuickSort(A, lo, supportElem);
        QuickSort(A, supportElem+1, hi);
    }
}

function Partition(A, lo, hi){
    var pivot = A[lo];
    i = lo;
    j = hi;
    while(true){
        while(A[i] < pivot){
            i++;
        }
        while(A[j] > pivot){
            j--;
        }
        if(i >= j){
            return j;
        }
        Swap(A, i, j);
    }
}

function Swap(A, i, j){
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

SortArr();
