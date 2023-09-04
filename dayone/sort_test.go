package dayone

import (
	"fmt"
	"testing"
)

func TestSelectorSort(t *testing.T) {
	arr := []int{10, 2, 4, 7, 7, 9, 2, 90}

	sign := 1

	switch sign {
	case 0:
		SelectorSort(arr)
	case 1:
		BubbleSort(arr)
	}

	fmt.Println(arr)
}
