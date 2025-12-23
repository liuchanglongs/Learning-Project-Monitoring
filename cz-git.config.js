module.exports = {
  language: 'zh-CN',
  messages: {
    type: '请选择提交类型:',
    scope: '请选择修改范围:',
    customScope: '请输入自定义修改范围:',
    subject: '请输入简短的提交描述:',
    body: '请输入详细描述:',
    breaking: '请输入不兼容变更:',
    footerPrefixesSelect: '请选择关联 issue 前缀:',
    customFooterPrefix: '请输入自定义 issue 前缀:',
    footer: '请输入关联 issue 编号:',
    confirmCommit: '确认提交信息?'
  },
  types: [
    { value: 'feat', name: 'feat: 新增功能' },
    { value: 'fix', name: 'fix: 修复 bug' },
    { value: 'docs', name: 'docs: 文档变更' },
    { value: 'style', name: 'style: 代码格式' },
    { value: 'refactor', name: 'refactor: 重构' },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'test', name: 'test: 测试' },
    { value: 'build', name: 'build: 构建' },
    { value: 'ci', name: 'ci: CI/CD' },
    { value: 'chore', name: 'chore: 其他变更' },
    { value: 'revert', name: 'revert: 回滚' }
  ]
}
