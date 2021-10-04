#include <iostream>
#include <vector>
class MyHashSet
{
public:
    std::vector<int> hashset;
    MyHashSet()
    {
        this->hashset = {};
    }

    void add(int key)
    {
        if (!contains(key))
        {
            hashset.push_back(key);
        }
    }

    void remove(int key)
    {
        if (contains(key))
        {
            int position = getPosition(key);
            hashset.erase(hashset.begin() + position);
        }
    }

    bool contains(int key)
    {
        int pos = getPosition(key);
        if (pos > -1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    int getPosition(int key)
    {
        int i = 0, j = hashset.size() - 1;
        while (i <= j)
        {
            if (hashset[i] == key)
            {
                return i;
            }
            if (hashset[j] == key)
            {
                return j;
            }
            i = i + 1;
            j = j - 1;
        }
        return -1;
    }
};
