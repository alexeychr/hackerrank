// 3:00
string strings_xor(string s, string t) {

    string res = "";
    for(int i = 0; i < s.size(); i++) {
        if(s[i] == t[i]) // instead of "="
            res += '0'; // instead of "="
        else
            res += '1';  // instead of "="
    }

    return res;
}