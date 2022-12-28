class Solution {
    struct Trie {
        Trie *children[26];
        string word;

        Trie() : word("") {
            for (int i = 0; i < 26; i++) {
                children[i] = nullptr;
            }
        }
    };

public:
    vector<string> findWords(vector<vector<char>> &board, vector<string> &words) {
        Trie *root = buildTrie(words);
        vector<string> result;
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                dfs(board, i, j, root, result);
            }
        }
        return result;
    }

    /** Inserts a word into the trie. */
    Trie *buildTrie(vector<string> &words) {
        Trie *root = new Trie();
        for (int j = 0; j < words.size(); j++) {
            string word = words[j];
            Trie *curr = root;
            for (int i = 0; i < word.length(); i++) {
                char c = word[i] - 'a';
                if (curr->children[c] == nullptr) {
                    curr->children[c] = new Trie();
                }
                curr = curr->children[c];
            }
            curr->word = word;
        }
        return root;
    }

    void dfs(vector<vector<char>> &board, int i, int j, Trie *p, vector<string> &result) {
        char c = board[i][j];
        if (c == '#' || !p->children[c - 'a']) return;
        p = p->children[c - 'a'];
        if (p->word.size() > 0) {
            result.push_back(p->word);
            p->word = "";
        }

        board[i][j] = '#';
        if (i > 0) dfs(board, i - 1, j, p, result);
        if (j > 0) dfs(board, i, j - 1, p, result);
        if (i < board.size() - 1) dfs(board, i + 1, j, p, result);
        if (j < board[0].size() - 1) dfs(board, i, j + 1, p, result);
        board[i][j] = c;
    }
};