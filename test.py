# def fetchDisplay(items, sortPara, sortOrder, itemPerPage, pageNum):
#     def sortDisplay(item):
#         return item[sortPara]
#     items.sort(key=sortDisplay, reverse=sortOrder)
#     if itemPerPage * pageNum > len(items):
#         return []
#     elif itemPerPage * (pageNum+1) < len(items):
#         return [item[0] for item in items[itemPerPage * pageNum:itemPerPage * (pageNum+1)]]
#     else:
#         return [item[0] for item in items[itemPerPage * pageNum:]]


# input = [['item1', 10, 15], ['item2', 3, 4], ['item3', 17, 8]]
# items.sort(key=lambda x: int(x[sortParameter]) if sortParameter > 0 else x[sortParameter], reverse=sortOrder==1)
# 	return [n for n,_,_ in items[pageNumber*itemPerPage: (1+pageNumber)*itemPerPage]]

# print(fetchDisplay(input, 1, 0, 2, 1))

import collections


# def subsequence_removal(nums):
#     res = []
#     value_list = []
#     if (len(nums) == len(set(nums))):
#         return res
#     for i in range(len(nums)):
#         sub_value_list = []
#         target_value_list = nums[:i]
#         for j in range(i, len(nums)):
#             temp_list = []
#             if i == j:
#                 sub_value_list.append(nums[j])
#                 temp_list = target_value_list + nums[j + 1:]
#             else:
#                 if nums[j] < sub_value_list[-1]:
#                     target_value_list.append(nums[j])
#                 else:
#                     sub_value_list.append(nums[j])
#                 temp_list = target_value_list + nums[j + 1:]

#             if len(temp_list) == len(set(temp_list)):
#                 if not value_list or len(value_list) < len(temp_list):
#                     value_list = temp_list
#     if value_list:
#         res = list(collections.Counter(nums) - collections.Counter(value_list))

#     if not res:
#         res = [-1]

#     return res


def remove_arr(array):
    if not array or len(array) < 2:
        return []
    num_remained = collections.Counter(array)
    num_to_remove = {}
    for num in num_remained:
        if num_remained[num] > 1:
            num_to_remove[num] = num_remained[num] - 1
    if not num_to_remove:
        return []
    res = []
    for num in array:
        num_remained[num] -= 1
        if num in num_to_remove:
            while res and res[-1] > num:
                if res[-1] in num_to_remove:
                    num_to_remove[res[-1]] += 1
                else:
                    num_to_remove[res[-1]] = 1
                if num_to_remove[res[-1]] > num_remained[res[-1]]:
                    return [-1]
                res.pop()
            res.append(num)
            num_to_remove[num] -= 1
            if num_to_remove[num] == 0:
                del num_to_remove[num]
    return res


nums = [1, 2,  3, 4, 5, 2, 2, 5, 6, 6]
# res = subsequence_removal(nums)
print(remove_arr([5, 3, 2, 2, 1, 1]))
