# # upgrading junction boxes
# def sort(boxList):
#     old = []
#     new = []
#     for i in range(len(boxList)):
#         s = boxList[i].split(" ")
#         identifier = s[0]
#         version = boxList[i][len(identifier)+1:]
#         if (version[0] >= 'a') and (version[0] <= 'z'):
#             old.append([identifier, version])
#         else:
#             new.append([identifier, version])
#     old = sorted(old, key=lambda x: (x[1], x[0]))
#     res = []
#     for i in range(len(old)):
#         res.append(old[i][0]+" "+old[i][1])
#     for i in range(len(new)):
#         res.append(new[i][0]+" "+new[i][1])
#     return res

# boxList = ["ykc 82 01", "eo first qpx", "09z cat hamster",
#            "06f 12 25 6", "az0 first qpx", "236 cat dog rabbit snake"]
# # print(sort(boxList))

# # Prime Air Route
# def max_route(maxTravelDist, forwardRouteList, returnRouteList):
#     max_dist = 0
#     res = []
#     for i in range(len(forwardRouteList)):
#         for j in range(len(returnRouteList)):
#             if (forwardRouteList[i][1] + returnRouteList[j][1] > maxTravelDist):
#                 continue
#             if (forwardRouteList[i][1] + returnRouteList[j][1] == max_dist):
#                 res.append([forwardRouteList[i][0], returnRouteList[j][0]])
#                 continue
#             if (forwardRouteList[i][1] + returnRouteList[j][1] > max_dist):
#                 max_dist = forwardRouteList[i][1] + returnRouteList[j][1]
#                 res = [[forwardRouteList[i][0], returnRouteList[j][0]]]
#     return res

# maxTravelDist = 10000
# forwardRouteList = [[1, 3000], [2, 5000], [3, 7000], [4, 10000]]
# returnRouteList = [[1, 2000], [2, 3000], [3, 4000], [4, 5000]]
# # print(max_route(maxTravelDist, forwardRouteList, returnRouteList))
# 每个人的5张牌开始检查 先用dictionary，来判断有没有牌是成对的，或者成3个
# 另外一个dictionary是来记录花色的个数，看会不会有同花
# 把牌的大小按照大小排序，然后判断是不是顺子
# 这些判断出来，根据规则给出相对应一个hand的大小
# 如果当前hand比之前的要大，则保存更大的hand
# 输入是x（people的数目），card
# card里包括number和color
# 他没有给格式，可以按照dictionary来算，people[i]['number]是牌点
# people[i]是不是还有五张牌
# def function(hands, playersNum):
#     res = [0 for _ in range(palyersNum)]
#     for i in range(palyersNum):
#         # Check the best hand
#         card_num = hands[i]['number']  #你这里写反了
#         color = hands[i]['color']
#         number_dict = dict()
#         color_dict = dict()
#         same_color = False  # 同花
#         hand = 0
#         for j in range(5):
#             if (card_num[j] not in number_dict):
#                 number_dict[card_num[j]] = 1
#             else:
#                 number_dict[card_num[j]] += 1
#             if (color[j] not in color_dict):  #写漏了
#                 color_dict[color[j]] = 1
#             else:
#                 number_dict[color[j]] += 1

#         for j in range(card_dict.keys()):
#             if (number_dict[j] == 2) and (hand < 1):  #看有没有成对的
#                 hand_score = 1  #hand_score 代表牌力大小
#             if (number_dict[j] == 2) and (hand_score == 1):  #两对
#                 hand_score = 2
#             if (number_dict[j] == 3):  #3条
#                 hand_score = 3
#             if (number_dict[j] == 2) and (hand_score == 3):  # full house
#                 hand_score = 6
#             if (number_dict[j] == 4):  # 4 of a kind
#                 hand_score = 7

#         for j in (color_dict.keys()):
#             if (color_dict[j] == 5):  # 看看是不是同花
#                 hand_score = 5
#                 same_color = True

#         card_num = sorted(card_num)
#         sequence = True  #顺子
#         for j in range(1, 5):
#             if (card_num[j] - card_num[j - 1] >
#                     1) and (card_num[j] - card_num[j - 1] != 0):  #这条件要加一个
#                 sequence = False
#                 break

#         if (sequence == True) and (same_color == False):
#             # 是顺子，不是同花
#             hand_score = 4
#         if (sequence == True) and (same_color == True):
#             # 同花顺
#             hand_score = 8
#         if (sequence == True) and (same_color == True) and (card_num[0] == 10):
#             # 最大的同花顺
#             hand_score = 9

#         res.append(hand_score)
#     max_hand = max(res)
#     output = []
#     for i in range(x):
#         if (res[i] == max_hand):
#             output.append(i)

#     if (len(output) == 1):
#         #只有一个人有最大的牌型，直接输出
#         return output[0]
#     else:
#         cur = output[0]
#         for i in range(1, len(output)):
#             cur = compare(cur, output[i], card)
#         # 如果有两个人以上有相同的牌型，然后就一个一个比，用compare的函数
# 最后你就给他说吧，最后再比较大小，一下子不太好写出来了，就是说这两个人的牌型相同，我们再去拿出这两个人的牌，比较大小
# 30% people choose to use apple pay, bring more traffic,
# Preorder traveral?  队，queue


#你要不就写这个 家电注释 应该是bfs 应该先serialise
def serialize(self, root):  #BFS
    if not root: return ""
    q = collections.deque([root])  #q是queue BFS遍历，res是结果
    res = []  #一步一步写出来是怎么运行的，每个变量变成什么样了
    while q:
        node = q.popleft()
        if node:
            q.append(node.left)
            q.append(node.right)
        res.append(str(node.val) if node else 'null')
    return res


# iteration1. q = [1], res = []
# iteration 1. q = [1, 2, 3], pop(1), q = [2, 3], res= ['1']
# iteration 2  q = [2,3] => q =[3, null, null] => res = ['1','2']
# iteration 3  q = [3] => q =[3, null, null, 4, 5] => res = ['1','2']
# iteration 4  q = [3, null, null, 4,5] => q =[null, null 4, 5] => res = ['1','2', '3']
# iteration 5 q = [null, 4, 5] => q = [4, 5] res = [1, 2, 3, null]

# height =3


def deserialize(self, nodes):  #这个和BFS没关系
    if not nodes: return None  #nodes 就是 array
    root = TreeNode(int(nodes[0]))
    q = collections.deque([root])
    index = 1
    while q:
        node = q.popleft()
        if nodes[index] is not 'null':
            node.left = TreeNode(int(nodes[index]))
            q.append(node.left)
        index += 1

        if nodes[index] is not 'null':
            node.right = TreeNode(int(nodes[index]))
            q.append(node.right)
        index += 1
    return root


# 最后一个输入为什么有X，Y
# 第一问直接算有多少入边  把重复的去掉
# 第二问类似于拓扑排序，从入度为0的开始


def compute_report(array report):
    num_dir = dict() # 直接接受的report个数
    total_report = dict()#写一下变量的意思 这个记录第二问总共的report接受数
    for i in range(len(report)):
        total_report[report[i][0]] = 0 #这两行是第二问
        total_report[report[i][1]] = 0
        if (report[i][1] not in num_dir.keys()):
            num_dir[report[i][1]] = []
        if (report[i][0] not in num_dir[report[i][1]]):
            num_dir[report[i][1]].append(report[i][0])
    for i in total_report.keys():
        if（i not in num_dir.keys()):
        print(i, " - ", len(num_dir[i]))
    # 第一问结束

{A, C} => num_dir[C] = [A]
{A, C} => num_dir[C] = [A]
{B, C} => num_dir[C] = [A, B]
total_report 是第二问

    # 第二问就是问从入度为0的开始，一直算到根节点，入度总共是多少
    # Topology sort
    que = [] # 队列保存当前入度为0的人
    for peo in total_report.keys():
        if (peo not in num_dir.keys()) # 如果不再num_dir的就是入读为0
            que.append(peo)
    # num_dir  记录入度
    while (len(que) > 0):
        for i in range(len(report)):
            if (report[i][0] == que[0]): # 找他要给谁汇报，把数字加上去
                total_report[report[i][1]] += total_report[report[i][0]]
                # 上面那行是说把汇报数累加过去
                total_report[report[i][1]] += 1
            num_dir[report[i][1]].pop() # 入度减1
            if (len(num_dir[report[i][1]] == 0)):
                que.append(report[i][1])
        print(que[0], ' - ', total_report[que[0]]) # 每次输出当前入度为0的
        que.pop()
    