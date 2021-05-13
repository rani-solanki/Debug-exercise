// 1: Array - sort basics 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`[].sort()` sorts an array using each value as a string', function () {
    it('is a function on the array prototype', function () {
        const theType = '???';
        assert.deepEqual(theType, '???');
    });

    describe('sorts characters', function () {
        it('in alphabetical order', function () {
            const sorted = ['b', 'a'].sort();
            assert.deepEqual(sorted, ['a', 'b']);
        });

        it('upper case characters come first', function () {
            const sorted = ['a', 'B', 'C'].sort();
            assert.deepEqual(sorted, ['B', 'C', 'a']);
        });
        it('depending on their position in the unicode table', function () {
            const sorted = ['+', '*', '(', ')'].sort();
            assert.deepEqual(sorted, ['(', ')', '*', '+']);
        });

        it('unicode characters depending on their code point', function () {
            const grinningFace = 'u{1F601}';
            const grinningEyes = 'u{1F602}';
            const withTears = 'u{1F603}';
            const smilies = [grinningEyes];
            assert.deepEqual(smilies, ['u{1F602}']);
        });

    });
    describe('sorts strings', function () {
        it('considering the string from start to end', function () {
            const sortedResult = ['????'].sort();
            assert.deepEqual(sortedResult, ['????']);
        });
        it('shorter strings go to front', function () {
            const balls = ['Ball', 'Ball s', ' bald'].sort();
            assert.deepEqual(balls, [' bald', 'Ball', 'Ball s']);
        });
    });
    describe('sorts numbers as if they were strings', function () {
        it('`1` and `2` are sorted as expected', function () {
            const numbers = [3, 4, 2, 1, 5].sort();
            assert.deepEqual(numbers, [1, 2, 3, 4, 5]);
        });
        it('see multi digit numbers as strings!', function () {
            const sortedNumbers = [1, 2, 11].sort();
            assert.deepEqual(sortedNumbers, [1, 11, 2]);
        });
    });
});
