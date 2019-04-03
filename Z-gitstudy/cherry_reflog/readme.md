先git 6个feature-1..6.md
再让master指向 feature-1

在新建一个feature-7.md

但是现在需要找回 feature-2..6
git reset --hard 地址
命令一:git reflog  能找回所有的提交记录
让master指向feature-6的提交记录
现在问题如何找回feature-7
使用 git cherry-pick 和feature-7 的记录地址
就能让 feature-7 也出现在git中