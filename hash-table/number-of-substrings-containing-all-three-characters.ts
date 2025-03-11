function numberOfSubstrings(s: string): number {
    let map = new Map<string, number>();
    let start = 0;
    let result = 0;

    for (let end = 0; end < s.length; end++) {
        map.set(s[end], (map.get(s[end]) || 0) + 1);

        while (map.size === 3) { 
            result += s.length - end;
            map.set(s[start], map.get(s[start])! - 1);
            if (map.get(s[start]) === 0) {
                map.delete(s[start]);
            }
            start++;
        }
    }

    return result;
}
