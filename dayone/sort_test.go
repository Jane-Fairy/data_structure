package dayone

import (
	"fmt"
	"testing"
)

func TestSelectorSort(t *testing.T) {
	arr := []int{10, 2, 4, 7, 7, 9, 2, 90}
	SelectorSort(arr)
	fmt.Println(arr)
}
