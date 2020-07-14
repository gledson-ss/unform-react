module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'always'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'always'],
        'type-enum': [
            2,
            'always',
            [
                ':building_construction: build',
                ':hammer: chore',
                ':heavy_plus_sign: ci',
                ':book: docs',
                ':collision: feat',
                ':beetle: fix',
                ':trophy: perf',
                ':pencil2: refactor',
                ':back: revert',
                ':eyeglasses: style',
                ':white_check_mark: test',
                ':x: delete'
            ],
        ],
    },
};