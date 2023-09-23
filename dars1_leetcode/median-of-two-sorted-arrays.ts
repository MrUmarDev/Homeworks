// leetcode link: https://leetcode.com/problems/median-of-two-sorted-arrays/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = mergeSortedArrays(nums1, nums2);
    const n = merged.length;

    if (n % 2 === 0) {
        const middle1 = merged[n / 2 - 1];
        const middle2 = merged[n / 2];
        return (middle1 + middle2) / 2;
    } else {
        return merged[Math.floor(n / 2)];
    }
}

function mergeSortedArrays(nums1: number[], nums2: number[]): number[] {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }

    return merged;
}

// misol uchun:

const nums1 = [1, 3];
const nums2 = [2];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // javob: 2