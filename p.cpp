// #include <bits/stdc++.h>
// #include <utility>
// #include<ext/pb_ds/assoc_container.hpp>
// #include<ext/pb_ds/tree_policy.hpp>
// using namespace std;
// using namespace __gnu_pbds;
// #define int long long
// #define float double
// #define pb push_back
// // less greater less_equal
// typedef tree<int, null_type, less<int>, rb_tree_tag, tree_order_statistics_node_update> pbds;
// // *A.find_by_order(k) -->finding kth element,A.order_of_key(K)-->number of element smaller than k
// #define fast ios_base::sync_with_stdio(false), cin.tie
// int32_t main()
// {
// int t=1;
// cin>>t;
// while(t--)
// {
    
// }
// return 0;
// }


#include<iostream>
using namespace std;
int &fxn()
{
    static int m=15;
    return m;
}
int main()
{
           int & y=fxn();
           y=y+10;
           cout<<fxn();
           return 0;
}