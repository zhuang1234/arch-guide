(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[584],{7866:(s,e,n)=>{"use strict";n.r(e),n.d(e,{data:()=>a});const a={key:"v-4abf01c4",path:"/rookie/basic-install.html",title:"archlinux 基础安装",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.再次确保是否为 UEFI 模式",slug:"_1-再次确保是否为-uefi-模式",children:[]},{level:2,title:"2.连接网络",slug:"_2-连接网络",children:[{level:3,title:"无线连接:",slug:"无线连接",children:[]},{level:3,title:"有线连接:",slug:"有线连接",children:[]}]},{level:2,title:"3.测试网络",slug:"_3-测试网络",children:[]},{level:2,title:"4.禁用 reflector",slug:"_4-禁用-reflector",children:[]},{level:2,title:"5.更新系统时钟",slug:"_5-更新系统时钟",children:[]},{level:2,title:"6.更换国内镜像源加快下载速度",slug:"_6-更换国内镜像源加快下载速度",children:[]},{level:2,title:"7.分区",slug:"_7-分区",children:[]},{level:2,title:"8.格式化",slug:"_8-格式化",children:[]},{level:2,title:"9.挂载",slug:"_9-挂载",children:[]},{level:2,title:"10.安装系统",slug:"_10-安装系统",children:[]},{level:2,title:"11.生成 fstab 文件",slug:"_11-生成-fstab-文件",children:[]},{level:2,title:"12.change root",slug:"_12-change-root",children:[]},{level:2,title:"13.设置主机名与时区",slug:"_13-设置主机名与时区",children:[]},{level:2,title:"14.硬件时间设置",slug:"_14-硬件时间设置",children:[]},{level:2,title:"15.设置 Locale",slug:"_15-设置-locale",children:[]},{level:2,title:"16.为 root 用户设置密码",slug:"_16-为-root-用户设置密码",children:[]},{level:2,title:"17.安装微码",slug:"_17-安装微码",children:[]},{level:2,title:"18.安装引导程序",slug:"_18-安装引导程序",children:[]},{level:2,title:"19.完成安装",slug:"_19-完成安装",children:[]}],filePathRelative:"rookie/basic-install.md",git:{updatedTime:1622365923e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:1}]}}},2081:(s,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>N});var a=n(6252);const l=(0,a.Wm)("h1",{id:"archlinux-基础安装"},[(0,a.Wm)("a",{class:"header-anchor",href:"#archlinux-基础安装"},"#"),(0,a.Uk)(" archlinux 基础安装")],-1),c=(0,a.Uk)("本节从安装最基础的无图形化 ArchLinux 系统开始。"),r={href:"https://wiki.archlinux.org/index.php/Installation_guide",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("官方安装指南"),p=(0,a.uE)('<h2 id="_1-再次确保是否为-uefi-模式"><a class="header-anchor" href="#_1-再次确保是否为-uefi-模式">#</a> 1.再次确保是否为 UEFI 模式</h2><p>在一系列的信息刷屏后，可以看到已经以 root 登陆安装系统了，此时第一个执行的命令是：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> /sys/firmware/efi/efivars\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>若输出了一堆东西，即 efi 变量，则说明已在 UEFI 模式。否则请确认你的启动方式是否为 UEFI。</p><h2 id="_2-连接网络"><a class="header-anchor" href="#_2-连接网络">#</a> 2.连接网络</h2><h3 id="无线连接"><a class="header-anchor" href="#无线连接">#</a> 无线连接:</h3><p>无线连接使用 iwctl 进行：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>iwctl                           <span class="token comment">#进入交互式命令行</span>\ndevice list                     <span class="token comment">#列出设备名，比如无线网卡看到叫 wlan0</span>\nstation wlan0 scan              <span class="token comment">#扫描网络</span>\nstation wlan0 get-networks      <span class="token comment">#列出网络 比如想连接CMCC-5AQ7这个无线</span>\nstation wlan0 connect CMCC-5AQ7 <span class="token comment">#进行连接 输入密码即可</span>\n<span class="token builtin class-name">exit</span>                            <span class="token comment">#成功后exit退出</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="有线连接"><a class="header-anchor" href="#有线连接">#</a> 有线连接:</h3><p>正常来说，只要插上一个已经联网的路由器分出的网线(DHCP)，直接就能联网。</p><p>可以等待几秒等网络建立链接后再进行下步测试网络的操作。</p><h2 id="_3-测试网络"><a class="header-anchor" href="#_3-测试网络">#</a> 3.测试网络</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ping</span> www.gnu.org\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',13),t=(0,a.Uk)("稍等片刻，若能看到数据返回，即说明已经联网，ctrl+c 终止退出当前命令。如果还是无法连接，使用 "),o=(0,a.Wm)("code",null,"ip link set xxx up",-1),d=(0,a.Uk)(" 命令确认你已经激活了对应的网卡，再重新继续网络链接与测试。若看到类似"),u=(0,a.Wm)("code",null,"Operation not possible due to RF-kill",-1),m=(0,a.Uk)("的报错，继续尝试"),b=(0,a.Wm)("code",null,"rfkill unblock wifi",-1),h=(0,a.Uk)("来解锁无线网卡。"),g={href:"https://wiki.archlinux.org/index.php/Network_configuration/Wireless#Check_the_driver_status",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Uk)("[1]"),k=(0,a.uE)('<h2 id="_4-禁用-reflector"><a class="header-anchor" href="#_4-禁用-reflector">#</a> 4.禁用 reflector</h2><p>2020 年新版 archliveiso 加入了 reflector 服务，它会自己更新 mirrorlist。在特定情况下，它会误删某些有用的源信息。这里联网后的第一件事就是将其禁用。也许它是一个好用的工具，但是很明显，它并不适合在安装的时候启用，尤其在中国。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl stop reflector.service\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_5-更新系统时钟"><a class="header-anchor" href="#_5-更新系统时钟">#</a> 5.更新系统时钟</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>timedatectl set-ntp <span class="token boolean">true</span>    <span class="token comment">#将系统时间与网络时间进行同步</span>\ntimedatectl status          <span class="token comment">#检查服务状态</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_6-更换国内镜像源加快下载速度"><a class="header-anchor" href="#_6-更换国内镜像源加快下载速度">#</a> 6.更换国内镜像源加快下载速度</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/pacman.d/mirrorlist    <span class="token comment">#不会vim的同学，此处注意视频中的vim操作步骤</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>放在最上面的是会使用的更新源,把中科大 ustc 的或者清华的放在最上面。</p><h2 id="_7-分区"><a class="header-anchor" href="#_7-分区">#</a> 7.分区</h2><p>这里总共设置三个分区，可以满足绝大多数人的需求。此步骤会清除磁盘中全部内容，请事先确认。</p><ul><li>EFI 分区： <code>/efi</code> 800M</li><li>根目录： <code>/</code> 100G</li><li>用户主目录： <code>/home</code> 剩余全部 越大越好</li></ul><blockquote><p>这里根目录的大小仅为参考，一般来说日常使用的 linux 分配 100G 已经够用了。根目录最小建议不小于 50G，根目录过小会造成无法更新系统软件包等问题。</p></blockquote><p>首先将磁盘转换为 gpt 类型</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lsblk                       <span class="token comment">#显示分区情况</span>\n<span class="token function">parted</span> /dev/sdx             <span class="token comment">#执行parted，进行磁盘类型变更</span>\n<span class="token punctuation">(</span>parted<span class="token punctuation">)</span>mktable             <span class="token comment">#输入mktable</span>\nNew disk label type? gpt    <span class="token comment">#输入gpt 将磁盘类型转换为gpt 如磁盘有数据会警告，输入yes即可</span>\nquit                        <span class="token comment">#最后quit退出parted命令行交互</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>接下来使用 cfdisk 命令对磁盘分区</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cfdisk</span> /dev/sdx <span class="token comment">#来执行分区操作,分配各个分区大小，类型</span>\n<span class="token function">fdisk</span> -l <span class="token comment">#复查磁盘情况</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>cfdisk 分区的详细操作见视频中的操作。一般建议将 EFI 分区设置为磁盘的第一个分区，据说有些主板如果不将 EFI 设置为第一个分区，可能有不兼容的问题。</p><h2 id="_8-格式化"><a class="header-anchor" href="#_8-格式化">#</a> 8.格式化</h2><p>这里的 sdax 只是例子，具体根据你的实际情况来，请注意视频中的操作。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#磁盘若有数据会问 &#39;proceed any way?&#39; y回车 即可</span>\nmkfs.ext4  /dev/sdax            <span class="token comment">#格式化根目录和home目录的两个分区</span>\nmkfs.vfat  /dev/sdax            <span class="token comment">#格式化efi分区</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_9-挂载"><a class="header-anchor" href="#_9-挂载">#</a> 9.挂载</h2><p>在挂载时，挂载是有顺序的，需要从根目录开始挂载<br> 这里的 sdax 只是例子，具体根据你的实际情况来，请注意视频中的操作。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mount</span> /dev/sdax  /mnt\n<span class="token function">mkdir</span> /mnt/home\n<span class="token function">mount</span> /dev/sdax /mnt/home\n<span class="token function">mkdir</span> /mnt/efi\n<span class="token function">mount</span> /dev/sdax /mnt/efi\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_10-安装系统"><a class="header-anchor" href="#_10-安装系统">#</a> 10.安装系统</h2><p>基础包</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pacstrap /mnt base base-devel linux linux-firmware  <span class="token comment">#base-devel在AUR包的安装是必须的</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>功能性软件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pacstrap /mnt dhcpcd iwd <span class="token function">vim</span> <span class="token function">sudo</span> bash-completion   <span class="token comment">#一个有线所需 一个无线所需 一个编辑器  一个提权工具 一个补全工具 iwd也需要dhcpcd</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_11-生成-fstab-文件"><a class="header-anchor" href="#_11-生成-fstab-文件">#</a> 11.生成 fstab 文件</h2><p>fstab 用来定义磁盘分区</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>genfstab -U /mnt <span class="token operator">&gt;&gt;</span> /mnt/etc/fstab\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>复查一下 /mnt/etc/fstab 确保没有错误</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> /mnt/etc/fstab\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_12-change-root"><a class="header-anchor" href="#_12-change-root">#</a> 12.change root</h2><p>把环境切换到新系统的/mnt 下</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>arch-chroot /mnt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_13-设置主机名与时区"><a class="header-anchor" href="#_13-设置主机名与时区">#</a> 13.设置主机名与时区</h2><p>首先在<code>/etc/hostname</code>设置主机名</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/hostname\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>加入你想为主机取的主机名，这里比如叫 myarch。</p><p>接下来在<code>/etc/hosts</code>设置与其匹配的条目。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /etc/hosts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>加入如下内容</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1   localhost\n::1         localhost\n<span class="token number">127.0</span>.1.1   myarch.localdomain\tmyarch\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',44),f=(0,a.Uk)("某些情况下如不设置主机名，在 KDE 下可能会存在网络情况变更时无法启动 GUI 应用的问题，在终端中出现形如"),_=(0,a.Wm)("code",null,"No protocol specified qt.qpa.xcb: could not connect to display",-1),x=(0,a.Uk)("的错误。这种情况极为少见，群主只遇到过一次网友反馈。相关参考链接:"),U={href:"https://bbs.archlinux.org/viewtopic.php?id=241338",target:"_blank",rel:"noopener noreferrer"},w=(0,a.Uk)("[1]"),W=(0,a.Uk)("，"),E={href:"https://bbs.archlinux.org/viewtopic.php?id=243674",target:"_blank",rel:"noopener noreferrer"},I=(0,a.Uk)("[2]"),y=(0,a.uE)('<hr><p>随后设置时区，在/etc/localtime 下用/usr 中合适的时区创建符号连接。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ln</span> -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_14-硬件时间设置"><a class="header-anchor" href="#_14-硬件时间设置">#</a> 14.硬件时间设置</h2><p>将系统时间同步到硬件时间</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hwclock --systohc\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_15-设置-locale"><a class="header-anchor" href="#_15-设置-locale">#</a> 15.设置 Locale</h2><p>Locale 决定了软件使用的语言、书写习惯和字符集。</p><p>编辑 /etc/locale.gen，去掉 en_US.UTF-8 行以及 zh_CN.UTF-8 的注释符号（#）。</p><p>然后使用如下命令生成 locale。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>locale-gen\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>向 /etc/locale.conf 输入内容</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;LANG=en_US.UTF-8&#39;</span>  <span class="token operator">&gt;</span> /etc/locale.conf\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_16-为-root-用户设置密码"><a class="header-anchor" href="#_16-为-root-用户设置密码">#</a> 16.为 root 用户设置密码</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">passwd</span> root\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_17-安装微码"><a class="header-anchor" href="#_17-安装微码">#</a> 17.安装微码</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pacman -S intel-ucode   <span class="token comment">#Intel</span>\npacman -S amd-ucode     <span class="token comment">#AMD</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_18-安装引导程序"><a class="header-anchor" href="#_18-安装引导程序">#</a> 18.安装引导程序</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pacman -S grub efibootmgr   <span class="token comment">#grub是启动引导器，efibootmgr被 grub 脚本用来将启动项写入 NVRAM。</span>\ngrub-install --target<span class="token operator">=</span>x86_64-efi --efi-directory<span class="token operator">=</span>/efi --bootloader-id<span class="token operator">=</span>GRUB <span class="token comment">#取名为GRUB 并将grubx64.efi安装到之前的指定位置</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>接下来编辑/etc/default/grub 文件，去掉<code>GRUB_CMDLINE_LINUX_DEFAULT</code>一行中最后的 quiet 参数，同时把 log level 的数值从 3 改成 5。这样是为了后续如果出现系统错误，方便排错。同时加入 nowatchdog 参数，这可以显著提高开关机速度。不会 vim 的同学注意视频中的操作。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/default/grub\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>最后生成 GRUB 所需的配置文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grub-mkconfig</span> -o /boot/grub/grub.cfg\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',23),F=(0,a.Uk)("在某些主板安装完成后，你会发现没有启动条目。这是因为某些主板的 UEFI 固件在显示 UEFI NVRAM 引导条目之前，需要在特定的位置存放可引导文件，不支持自定义存放 efi 文件(如微星 Z170-A Gaming PRO)。解决方案是在默认启动路径下安装 GRUB。重新插入安装优盘，挂载目录，chroot 到/mnt，然后你可以直接把已经生成好的 efi 文件移动到默认目录下，如下代码所示。只有安装完成后你的主板不出现启动条目才需要尝试如下命令，正常安装无需执行。"),R={href:"https://wiki.archlinux.org/index.php/GRUB#Default/fallback_boot_path",target:"_blank",rel:"noopener noreferrer"},C=(0,a.Uk)("官方参考文档"),G=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /efi/EFI/BOOT\n<span class="token function">mv</span> /efi/EFI/GRUB/grubx64.efi /efi/EFI/BOOT/BOOTX64.EFI\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_19-完成安装"><a class="header-anchor" href="#_19-完成安装">#</a> 19.完成安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">exit</span>                <span class="token comment"># 退回安装环境#</span>\n<span class="token function">umount</span> -R  /mnt     <span class="token comment"># 卸载新分区</span>\n<span class="token function">reboot</span>              <span class="token comment"># 重启</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>注意，重启前要先拔掉优盘，否则你重启后还是进安装程序而不是安装好的系统。重启后，开启 dhcp 服务，即可连接网络</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start dhcpcd  <span class="token comment">#立即启动dhcp</span>\n<span class="token function">ping</span> www.baidu.com      <span class="token comment">#测试网络连接</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>若为无线链接，则还需要启动 iwd 才可以使用 iwctl 连接网络</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start iwd <span class="token comment">#立即启动iwd</span>\niwctl               <span class="token comment">#和之前的方式一样，连接无线网络</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>到此为止，一个基础的，无 UI 界面的 Arch Linux 已经安装完成了。紧接着下一节，我们来安装图形界面。</p>',8),A=(0,a.Uk)("archlinux 在 2021 年 4 月在安装镜像中内置了一个"),q={href:"https://archlinux.org/packages/extra/any/archinstall/",target:"_blank",rel:"noopener noreferrer"},B=(0,a.Uk)("安装脚本"),L=(0,a.Uk)("，其就是类似一个一键安装脚本，提供一些选项，即可快速安装。其和所有一键安装脚本类似，提供自动化，且不灵活的安装过程。缺陷为：只提供有限的文件系统格式、只可限定在一个磁盘、不能指定源、只提供有限的桌面选择、自动分区不可手动干预、输入错误直接崩溃退出、仅支持 UEFI 等。不建议使用这种安装脚本，除了以上各种原因，初学者也无法在这种安装过程中学到任何东西。如果你因为任何原因需要快速启动一个基础的 archlinux 环境，那么可以尝试此脚本。"),N={render:function(s,e){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,(0,a.Wm)("p",null,[c,(0,a.Wm)("a",r,[i,(0,a.Wm)(n)])]),p,(0,a.Wm)("p",null,[t,o,d,u,m,b,h,(0,a.Wm)("a",g,[v,(0,a.Wm)(n)])]),k,(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,[f,_,x,(0,a.Wm)("a",U,[w,(0,a.Wm)(n)]),W,(0,a.Wm)("a",E,[I,(0,a.Wm)(n)])])]),y,(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,[F,(0,a.Wm)("a",R,[C,(0,a.Wm)(n)])])]),G,(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,[A,(0,a.Wm)("a",q,[B,(0,a.Wm)(n)]),L])])],64)}}}}]);