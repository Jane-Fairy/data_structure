package dayone

import (
	"fmt"
	"testing"
)

func TestSort(t *testing.T) {
	arr := []int{10, 2, 4, 7, 7, 9, 2, 90}

	sign := 2

	switch sign {

	case 0:
		SelectorSort(arr)
	case 1:
		BubbleSort(arr)
	case 2:
		insertionSort(arr)
	}

	fmt.Println(arr)
}
