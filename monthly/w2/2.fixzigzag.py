#// 2:00
def findZigZagSequence(a, n):
    a.sort()
    mid = int((n + 1)/2) - 1 # added "-1"
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 2 # replaced "-1" to "-2"
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1 # replaced "+1" to "-1"

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return