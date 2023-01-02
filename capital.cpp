#include<iostream>
using namespace std;

bool capital(string str){

    int count = 0;
    if(isupper(str[0])) count++;
    for(int i =1; i<str.size(); i++){
        if(isupper(str[i])) count++;
    }

    if(count == 1 || count == 0 || count == str.size()) return true;

    return false;
}

    int main()
{
    string str = "fffffF";
    cout << capital(str) << endl;
    return 0;
}
