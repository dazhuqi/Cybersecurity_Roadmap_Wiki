(() => {
  "use strict";

  const DEFAULT_PAGE = "wiki/Home.md";
  const LANGUAGES = ["en", "zh"];

  const TEXT = {
    en: {
      searchLabel: "Search pages",
      searchPlaceholder: "Search notes",
      switchLanguage: "Switch to Chinese",
      loading: "Loading wiki page...",
      fallback:
        "Chinese content is not available for this page yet, so the English source is being shown.",
      loadError:
        "This page could not be loaded. If you opened index.html directly, use GitHub Pages or start a local web server because browsers block local Markdown fetches.",
      noResults: "No matching pages.",
    },
    zh: {
      searchLabel: "搜索页面",
      searchPlaceholder: "搜索笔记",
      switchLanguage: "Switch to English",
      loading: "正在加载 wiki 页面...",
      fallback: "这个页面暂时没有中文正文，所以正在显示英文原文。",
      loadError:
        "这个页面无法加载。如果你是直接打开 index.html，请使用 GitHub Pages 或启动本地 Web 服务，因为浏览器会拦截本地 Markdown 读取。",
      noResults: "没有匹配的页面。",
    },
  };

  const NAV_TREE = [
    {
      labels: { en: "Start", zh: "开始" },
      children: [
        { path: "wiki/Home.md", labels: { en: "Home", zh: "首页" } },
        {
          path: "wiki/00-meta/progress-tracker.md",
          labels: { en: "Progress Tracker", zh: "进度追踪" },
        },
        {
          path: "wiki/00-meta/learning-log.md",
          labels: { en: "Learning Log", zh: "学习日志" },
        },
        {
          path: "wiki/00-meta/weekly-review.md",
          labels: { en: "Weekly Review", zh: "周复盘" },
        },
        { path: "wiki/00-meta/glossary.md", labels: { en: "Glossary", zh: "术语表" } },
        {
          path: "wiki/00-meta/wiki-structure.md",
          labels: { en: "Wiki Structure", zh: "Wiki 结构" },
        },
      ],
    },
    {
      labels: { en: "Roadmap", zh: "路线图" },
      children: [
        {
          path: "wiki/01-fundamental-it-skills/README.md",
          labels: { en: "01 Fundamental IT Skills", zh: "01 基础 IT 技能" },
          children: [
            {
              path: "wiki/01-fundamental-it-skills/hardware-and-connectivity.md",
              labels: { en: "Hardware and Connectivity", zh: "硬件和连接" },
            },
            {
              path: "wiki/01-fundamental-it-skills/networking-basics.md",
              labels: { en: "Basic Computer Networking", zh: "基础计算机网络" },
            },
            {
              path: "wiki/01-fundamental-it-skills/troubleshooting-and-productivity.md",
              labels: { en: "Troubleshooting and Productivity Suites", zh: "排错和办公套件" },
            },
            {
              path: "wiki/01-fundamental-it-skills/virtualization.md",
              labels: { en: "Virtualization", zh: "虚拟化" },
            },
          ],
        },
        {
          path: "wiki/02-operating-systems/README.md",
          labels: { en: "02 Operating Systems", zh: "02 操作系统" },
          children: [
            { path: "wiki/02-operating-systems/windows.md", labels: { en: "Windows", zh: "Windows" } },
            { path: "wiki/02-operating-systems/linux.md", labels: { en: "Linux", zh: "Linux" } },
            { path: "wiki/02-operating-systems/macos.md", labels: { en: "macOS", zh: "macOS" } },
            {
              path: "wiki/02-operating-systems/command-line.md",
              labels: { en: "Command Line", zh: "命令行" },
            },
            {
              path: "wiki/02-operating-systems/file-permissions.md",
              labels: { en: "File Permissions", zh: "文件权限" },
            },
            {
              path: "wiki/02-operating-systems/os-hardening.md",
              labels: { en: "OS Hardening", zh: "系统加固" },
            },
          ],
        },
        {
          path: "wiki/03-networking-knowledge/README.md",
          labels: { en: "03 Networking Knowledge", zh: "03 网络知识" },
          children: [
            {
              path: "wiki/03-networking-knowledge/osi-and-tcp-ip.md",
              labels: { en: "OSI and TCP/IP Models", zh: "OSI 和 TCP/IP 模型" },
            },
            {
              path: "wiki/03-networking-knowledge/ip-addressing-subnetting.md",
              labels: { en: "IP Addressing and Subnetting", zh: "IP 地址和子网划分" },
            },
            {
              path: "wiki/03-networking-knowledge/protocols-and-ports.md",
              labels: { en: "Protocols and Ports", zh: "协议和端口" },
            },
            {
              path: "wiki/03-networking-knowledge/network-devices-topologies.md",
              labels: { en: "Network Devices and Topologies", zh: "网络设备和拓扑" },
            },
            {
              path: "wiki/03-networking-knowledge/network-services.md",
              labels: { en: "Network Services", zh: "网络服务" },
            },
            {
              path: "wiki/03-networking-knowledge/wireless-and-vpn.md",
              labels: { en: "Wireless and VPN", zh: "无线网络和 VPN" },
            },
            {
              path: "wiki/03-networking-knowledge/troubleshooting-tools.md",
              labels: { en: "Network Troubleshooting Tools", zh: "网络排错工具" },
            },
            {
              path: "wiki/03-networking-knowledge/packet-analysis.md",
              labels: { en: "Packet Analysis", zh: "数据包分析" },
            },
          ],
        },
        {
          path: "wiki/04-security-skills-and-knowledge/README.md",
          labels: { en: "04 Security Skills and Knowledge", zh: "04 安全技能和知识" },
          children: [
            {
              path: "wiki/04-security-skills-and-knowledge/core-concepts.md",
              labels: { en: "Core Security Concepts", zh: "核心安全概念" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/attack-types.md",
              labels: { en: "Attack Types", zh: "攻击类型" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/auth-identity-access.md",
              labels: { en: "Authentication, Identity, and Access", zh: "认证、身份和访问" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/cryptography-basics.md",
              labels: { en: "Cryptography Basics", zh: "密码学基础" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/defensive-security.md",
              labels: { en: "Defensive Security", zh: "防御安全" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/forensics-and-malware.md",
              labels: { en: "Forensics and Malware Basics", zh: "取证和恶意软件基础" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/frameworks-standards-compliance.md",
              labels: { en: "Frameworks, Standards, and Compliance", zh: "框架、标准和合规" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/incident-response.md",
              labels: { en: "Incident Response", zh: "事件响应" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/offensive-security-basics.md",
              labels: { en: "Offensive Security Basics", zh: "进攻安全基础" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/security-monitoring.md",
              labels: { en: "Security Monitoring", zh: "安全监控" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/threat-intel-osint.md",
              labels: { en: "Threat Intelligence and OSINT", zh: "威胁情报和 OSINT" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/vulnerability-management.md",
              labels: { en: "Vulnerability Management", zh: "漏洞管理" },
            },
            {
              path: "wiki/04-security-skills-and-knowledge/web-security.md",
              labels: { en: "Web Security", zh: "Web 安全" },
            },
          ],
        },
        {
          path: "wiki/05-cloud-skills-and-knowledge/README.md",
          labels: { en: "05 Cloud Skills and Knowledge", zh: "05 云技能和知识" },
          children: [
            {
              path: "wiki/05-cloud-skills-and-knowledge/cloud-service-models.md",
              labels: { en: "Cloud Service Models", zh: "云服务模型" },
            },
            {
              path: "wiki/05-cloud-skills-and-knowledge/cloud-deployment-models.md",
              labels: { en: "Cloud Deployment Models", zh: "云部署模型" },
            },
            {
              path: "wiki/05-cloud-skills-and-knowledge/cloud-providers.md",
              labels: { en: "Cloud Providers", zh: "云厂商" },
            },
            {
              path: "wiki/05-cloud-skills-and-knowledge/cloud-security-concepts.md",
              labels: { en: "Cloud Security Concepts", zh: "云安全概念" },
            },
            {
              path: "wiki/05-cloud-skills-and-knowledge/cloud-storage.md",
              labels: { en: "Cloud Storage", zh: "云存储" },
            },
            {
              path: "wiki/05-cloud-skills-and-knowledge/infrastructure-as-code.md",
              labels: { en: "Infrastructure as Code", zh: "基础设施即代码" },
            },
            {
              path: "wiki/05-cloud-skills-and-knowledge/serverless.md",
              labels: { en: "Serverless", zh: "Serverless" },
            },
          ],
        },
        {
          path: "wiki/06-programming-skills/README.md",
          labels: { en: "06 Programming Skills", zh: "06 编程技能" },
          children: [
            { path: "wiki/06-programming-skills/bash.md", labels: { en: "Bash", zh: "Bash" } },
            { path: "wiki/06-programming-skills/powershell.md", labels: { en: "PowerShell", zh: "PowerShell" } },
            { path: "wiki/06-programming-skills/python.md", labels: { en: "Python", zh: "Python" } },
            {
              path: "wiki/06-programming-skills/javascript.md",
              labels: { en: "JavaScript", zh: "JavaScript" },
            },
            { path: "wiki/06-programming-skills/go.md", labels: { en: "Go", zh: "Go" } },
            { path: "wiki/06-programming-skills/cpp.md", labels: { en: "C++", zh: "C++" } },
            {
              path: "wiki/06-programming-skills/secure-coding-notes.md",
              labels: { en: "Secure Coding Notes", zh: "安全编码笔记" },
            },
          ],
        },
      ],
    },
    {
      labels: { en: "Practice", zh: "实践" },
      children: [
        {
          path: "wiki/07-practice-labs/README.md",
          labels: { en: "07 Practice Labs and CTFs", zh: "07 实验和 CTF" },
          children: [
            { path: "wiki/07-practice-labs/tryhackme.md", labels: { en: "TryHackMe", zh: "TryHackMe" } },
            { path: "wiki/07-practice-labs/hackthebox.md", labels: { en: "HackTheBox", zh: "HackTheBox" } },
            { path: "wiki/07-practice-labs/vulnhub.md", labels: { en: "VulnHub", zh: "VulnHub" } },
            { path: "wiki/07-practice-labs/picoctf.md", labels: { en: "picoCTF", zh: "picoCTF" } },
            {
              path: "wiki/07-practice-labs/sans-holiday-hack-challenge.md",
              labels: { en: "SANS Holiday Hack Challenge", zh: "SANS Holiday Hack Challenge" },
            },
            {
              path: "wiki/07-practice-labs/writeups/README.md",
              labels: { en: "Lab Writeups", zh: "实验记录" },
            },
          ],
        },
        {
          path: "wiki/08-certifications/README.md",
          labels: { en: "08 Certifications", zh: "08 认证" },
          children: [
            { path: "wiki/08-certifications/comptia-a-plus.md", labels: { en: "CompTIA A+", zh: "CompTIA A+" } },
            {
              path: "wiki/08-certifications/comptia-network-plus.md",
              labels: { en: "CompTIA Network+", zh: "CompTIA Network+" },
            },
            {
              path: "wiki/08-certifications/comptia-security-plus.md",
              labels: { en: "CompTIA Security+", zh: "CompTIA Security+" },
            },
            {
              path: "wiki/08-certifications/comptia-linux-plus.md",
              labels: { en: "CompTIA Linux+", zh: "CompTIA Linux+" },
            },
            { path: "wiki/08-certifications/ccna.md", labels: { en: "CCNA", zh: "CCNA" } },
            { path: "wiki/08-certifications/ceh.md", labels: { en: "CEH", zh: "CEH" } },
            { path: "wiki/08-certifications/cisa.md", labels: { en: "CISA", zh: "CISA" } },
            { path: "wiki/08-certifications/cism.md", labels: { en: "CISM", zh: "CISM" } },
            { path: "wiki/08-certifications/cissp.md", labels: { en: "CISSP", zh: "CISSP" } },
            { path: "wiki/08-certifications/crest.md", labels: { en: "CREST", zh: "CREST" } },
            { path: "wiki/08-certifications/giac.md", labels: { en: "GIAC", zh: "GIAC" } },
            { path: "wiki/08-certifications/gsec.md", labels: { en: "GSEC", zh: "GSEC" } },
            { path: "wiki/08-certifications/gpen.md", labels: { en: "GPEN", zh: "GPEN" } },
            { path: "wiki/08-certifications/gwapt.md", labels: { en: "GWAPT", zh: "GWAPT" } },
            { path: "wiki/08-certifications/oscp.md", labels: { en: "OSCP", zh: "OSCP" } },
          ],
        },
      ],
    },
    {
      labels: { en: "Resources", zh: "资源" },
      children: [
        { path: "wiki/09-resources/README.md", labels: { en: "09 Resources", zh: "09 资源" } },
        { path: "wiki/09-resources/books.md", labels: { en: "Books", zh: "书籍" } },
        { path: "wiki/09-resources/cheatsheets.md", labels: { en: "Cheatsheets", zh: "速查表" } },
        { path: "wiki/09-resources/courses.md", labels: { en: "Courses", zh: "课程" } },
        { path: "wiki/09-resources/tools.md", labels: { en: "Tools", zh: "工具" } },
        { path: "wiki/09-resources/websites.md", labels: { en: "Websites", zh: "网站" } },
      ],
    },
    {
      labels: { en: "Templates", zh: "模板" },
      children: [
        {
          path: "wiki/templates/topic-template.md",
          labels: { en: "Topic Template", zh: "主题模板" },
        },
        {
          path: "wiki/templates/lab-writeup-template.md",
          labels: { en: "Lab Writeup Template", zh: "实验记录模板" },
        },
        {
          path: "wiki/templates/weekly-review-template.md",
          labels: { en: "Weekly Review Template", zh: "周复盘模板" },
        },
      ],
    },
  ];

  const elements = {};
  const pageIndex = new Map();
  let currentLanguage = getSavedLanguage();
  let currentPath = DEFAULT_PAGE;
  let currentAnchor = "";
  let requestId = 0;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheElements();
    configureMarkdown();
    indexPages(NAV_TREE, []);
    bindEvents();

    const route = parseRoute();
    currentLanguage = route.language || currentLanguage;
    currentPath = route.path;
    currentAnchor = route.anchor;
    saveLanguage(currentLanguage);
    replaceRoute(currentPath, currentLanguage, currentAnchor);
    updateLanguageUi();
    renderNavigation();
    loadPage(currentPath, currentAnchor);
  }

  function cacheElements() {
    elements.nav = document.querySelector("#wiki-nav");
    elements.content = document.querySelector("#wiki-content");
    elements.notice = document.querySelector("#notice");
    elements.breadcrumb = document.querySelector("#breadcrumb");
    elements.sourcePath = document.querySelector("#source-path");
    elements.searchInput = document.querySelector("#search-input");
    elements.languageToggle = document.querySelector("#language-toggle");
    elements.sidebar = document.querySelector("#sidebar");
    elements.openSidebar = document.querySelector("#open-sidebar");
    elements.closeSidebar = document.querySelector("#close-sidebar");
  }

  function configureMarkdown() {
    if (!window.marked) {
      return;
    }

    window.marked.setOptions({
      breaks: false,
      gfm: true,
    });
  }

  function bindEvents() {
    window.addEventListener("hashchange", () => {
      const route = parseRoute();
      currentLanguage = route.language || currentLanguage;
      currentPath = route.path;
      currentAnchor = route.anchor;
      saveLanguage(currentLanguage);
      updateLanguageUi();
      renderNavigation();
      loadPage(currentPath, currentAnchor);
    });

    elements.nav.addEventListener("click", (event) => {
      const link = event.target.closest("[data-page-path]");
      if (!link) {
        return;
      }

      event.preventDefault();
      navigate(link.dataset.pagePath);
      closeSidebar();
    });

    elements.content.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-page-path]");
      if (!link) {
        return;
      }

      event.preventDefault();
      navigate(link.dataset.pagePath, link.dataset.pageAnchor || "");
    });

    elements.searchInput.addEventListener("input", renderNavigation);

    elements.languageToggle.addEventListener("click", () => {
      const nextLanguage = currentLanguage === "en" ? "zh" : "en";
      currentLanguage = nextLanguage;
      saveLanguage(nextLanguage);
      setRoute(currentPath, nextLanguage, currentAnchor);
    });

    elements.openSidebar.addEventListener("click", openSidebar);
    elements.closeSidebar.addEventListener("click", closeSidebar);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    });
  }

  function navigate(path, anchor = "") {
    setRoute(normalizePath(path), currentLanguage, anchor);
  }

  function setRoute(path, language, anchor = "") {
    const nextHash = buildRoute(path, language, anchor);
    if (window.location.hash === nextHash) {
      loadPage(path, anchor);
      return;
    }

    window.location.hash = nextHash;
  }

  function replaceRoute(path, language, anchor = "") {
    window.history.replaceState(null, "", buildRoute(path, language, anchor));
  }

  function buildRoute(path, language, anchor = "") {
    const safeLanguage = LANGUAGES.includes(language) ? language : "en";
    const safePath = normalizePath(path);
    return `#/${safeLanguage}/${safePath}${anchor ? `#${anchor}` : ""}`;
  }

  function parseRoute() {
    const raw = decodeURIComponent(window.location.hash.replace(/^#\/?/, ""));
    const split = splitRouteAndAnchor(raw);
    const parts = split.route.split("/").filter(Boolean);
    let language = null;
    let pathParts = parts;

    if (LANGUAGES.includes(parts[0])) {
      language = parts[0];
      pathParts = parts.slice(1);
    }

    return {
      language,
      path: normalizePath(pathParts.join("/") || DEFAULT_PAGE),
      anchor: split.anchor,
    };
  }

  function splitRouteAndAnchor(rawRoute) {
    const hashIndex = rawRoute.indexOf("#");
    if (hashIndex === -1) {
      return { route: rawRoute, anchor: "" };
    }

    return {
      route: rawRoute.slice(0, hashIndex),
      anchor: rawRoute.slice(hashIndex + 1),
    };
  }

  function normalizePath(path) {
    const withoutQuery = String(path || DEFAULT_PAGE)
      .replace(/\\/g, "/")
      .split("?")[0]
      .replace(/^\/+/, "")
      .replace(/^wiki-zh\//, "wiki/");
    const parts = [];

    for (const part of withoutQuery.split("/")) {
      if (!part || part === ".") {
        continue;
      }

      if (part === "..") {
        parts.pop();
        continue;
      }

      parts.push(part);
    }

    const normalized = parts.join("/");
    return normalized.endsWith(".md") ? normalized : DEFAULT_PAGE;
  }

  function renderNavigation() {
    const query = elements.searchInput.value.trim().toLowerCase();
    const fragment = document.createDocumentFragment();

    elements.nav.textContent = "";
    for (const node of NAV_TREE) {
      const rendered = renderNode(node, query, 0);
      if (rendered) {
        fragment.appendChild(rendered);
      }
    }

    if (!fragment.childNodes.length) {
      const empty = document.createElement("p");
      empty.className = "nav-empty";
      empty.textContent = TEXT[currentLanguage].noResults;
      fragment.appendChild(empty);
    }

    elements.nav.appendChild(fragment);
  }

  function renderNode(node, query, depth) {
    if (!nodeMatchesQuery(node, query)) {
      return null;
    }

    const hasChildren = Array.isArray(node.children) && node.children.length > 0;

    if (!hasChildren) {
      return createPageLink(node, depth);
    }

    const details = document.createElement("details");
    details.className = depth === 0 ? "nav-section" : "nav-node";
    details.open = query.length > 0 || depth === 0 || nodeIsActive(node);

    const summary = document.createElement("summary");
    const title = document.createElement("span");
    title.className = "nav-section-title";
    title.textContent = getLabel(node);

    if (node.path) {
      title.dataset.pagePath = node.path;
      title.setAttribute("role", "link");
      title.tabIndex = 0;
      title.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigate(node.path);
        }
      });
    }

    summary.appendChild(title);
    details.appendChild(summary);

    const children = document.createElement("div");
    children.className = "nav-children";
    for (const child of node.children) {
      const childElement = renderNode(child, query, depth + 1);
      if (childElement) {
        children.appendChild(childElement);
      }
    }

    details.appendChild(children);
    return details;
  }

  function createPageLink(node) {
    const link = document.createElement("a");
    link.className = "nav-page";
    link.href = buildRoute(node.path, currentLanguage);
    link.dataset.pagePath = node.path;
    link.textContent = getLabel(node);

    if (normalizePath(node.path) === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }

    return link;
  }

  function nodeMatchesQuery(node, query) {
    if (!query) {
      return true;
    }

    const label = getLabel(node).toLowerCase();
    const englishLabel = (node.labels?.en || "").toLowerCase();
    const path = (node.path || "").toLowerCase();
    const selfMatches = label.includes(query) || englishLabel.includes(query) || path.includes(query);

    if (selfMatches) {
      return true;
    }

    return Boolean(node.children?.some((child) => nodeMatchesQuery(child, query)));
  }

  function nodeIsActive(node) {
    if (node.path && normalizePath(node.path) === currentPath) {
      return true;
    }

    return Boolean(node.children?.some((child) => nodeIsActive(child)));
  }

  async function loadPage(path, anchor = "") {
    const loadId = ++requestId;
    const safePath = normalizePath(path);
    const text = TEXT[currentLanguage];

    currentPath = safePath;
    currentAnchor = anchor;
    elements.notice.hidden = true;
    elements.notice.textContent = "";
    elements.content.innerHTML = `<p>${escapeHtml(text.loading)}</p>`;
    updatePageMeta(safePath, safePath);

    try {
      const page = await fetchMarkdown(safePath);
      if (loadId !== requestId) {
        return;
      }

      const rendered = renderMarkdown(page.markdown);
      elements.content.innerHTML = sanitizeHtml(rendered);
      addHeadingIds();
      rewriteArticleLinks(safePath);
      updatePageMeta(safePath, page.sourcePath);

      if (page.fallback) {
        elements.notice.hidden = false;
        elements.notice.textContent = text.fallback;
      }

      renderNavigation();
      focusAndScroll(anchor);
    } catch (error) {
      if (loadId !== requestId) {
        return;
      }

      elements.content.innerHTML = `<h1>Page load error</h1><p>${escapeHtml(text.loadError)}</p>`;
      elements.notice.hidden = true;
      console.error(error);
    }
  }

  async function fetchMarkdown(path) {
    const candidates =
      currentLanguage === "zh" ? [toLocalizedPath(path), path] : [path];
    let lastError = null;

    for (const candidate of candidates) {
      try {
        const response = await fetch(candidate, { cache: "no-cache" });
        if (response.ok) {
          return {
            markdown: await response.text(),
            sourcePath: candidate,
            fallback: candidate !== candidates[0],
          };
        }
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError || new Error(`Unable to load ${path}`);
  }

  function toLocalizedPath(path) {
    return normalizePath(path).replace(/^wiki\//, "wiki-zh/");
  }

  function renderMarkdown(markdown) {
    if (!window.marked) {
      return `<pre>${escapeHtml(markdown)}</pre>`;
    }

    return window.marked.parse(markdown);
  }

  function sanitizeHtml(html) {
    if (!window.DOMPurify) {
      return html;
    }

    return window.DOMPurify.sanitize(html, {
      ADD_ATTR: ["target"],
    });
  }

  function rewriteArticleLinks(basePath) {
    elements.content.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      const markdownTarget = resolveMarkdownLink(href, basePath);

      if (markdownTarget) {
        link.href = buildRoute(markdownTarget.path, currentLanguage, markdownTarget.anchor);
        link.dataset.pagePath = markdownTarget.path;
        link.dataset.pageAnchor = markdownTarget.anchor;
        return;
      }

      if (isExternalLink(href)) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
    });

    elements.content.querySelectorAll("img[src]").forEach((image) => {
      const src = image.getAttribute("src");
      if (!src || isExternalLink(src) || src.startsWith("data:") || src.startsWith("/")) {
        return;
      }

      image.src = resolveAssetPath(src, basePath);
    });
  }

  function resolveMarkdownLink(href, basePath) {
    if (!href || isExternalLink(href) || href.startsWith("#")) {
      return null;
    }

    const cleanHref = href.split("?")[0];
    const route = splitRouteAndAnchor(cleanHref);
    if (!route.route.endsWith(".md")) {
      return null;
    }

    return {
      path: resolveRelativePath(route.route, basePath),
      anchor: route.anchor,
    };
  }

  function resolveAssetPath(src, basePath) {
    return resolveRelativePath(src, basePath);
  }

  function resolveRelativePath(target, basePath) {
    if (target.startsWith("wiki/") || target.startsWith("wiki-zh/")) {
      return normalizeGenericPath(target);
    }

    const baseParts = normalizePath(basePath).split("/");
    baseParts.pop();
    return normalizeGenericPath(`${baseParts.join("/")}/${target}`);
  }

  function normalizeGenericPath(path) {
    const parts = [];

    for (const part of String(path).replace(/\\/g, "/").replace(/^\/+/, "").split("/")) {
      if (!part || part === ".") {
        continue;
      }

      if (part === "..") {
        parts.pop();
        continue;
      }

      parts.push(part);
    }

    return parts.join("/");
  }

  function isExternalLink(href) {
    return /^(https?:|mailto:|tel:)/i.test(href || "");
  }

  function addHeadingIds() {
    const usedIds = new Map();
    elements.content.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((heading) => {
      const baseId = slugify(heading.textContent || "section");
      const count = usedIds.get(baseId) || 0;
      usedIds.set(baseId, count + 1);
      heading.id = count ? `${baseId}-${count}` : baseId;
    });
  }

  function focusAndScroll(anchor) {
    elements.content.focus({ preventScroll: true });

    if (!anchor) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(anchor) || document.querySelector(`[name="${CSS.escape(anchor)}"]`);
      if (target) {
        target.scrollIntoView({ block: "start" });
      }
    });
  }

  function updatePageMeta(path, sourcePath) {
    const trail = getTrail(path).map(getLabel);
    elements.breadcrumb.textContent = trail.length ? trail.join(" / ") : readableName(path);
    elements.sourcePath.textContent = sourcePath;
    document.title = `${trail.at(-1) || readableName(path)} - Cybersecurity Roadmap Wiki`;
  }

  function updateLanguageUi() {
    const text = TEXT[currentLanguage];
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = text[element.dataset.i18n] || element.textContent;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = text[element.dataset.i18nPlaceholder] || element.placeholder;
    });

    elements.languageToggle.textContent = currentLanguage === "en" ? "中文" : "English";
    elements.languageToggle.setAttribute("aria-label", text.switchLanguage);
  }

  function openSidebar() {
    elements.sidebar.classList.add("open");
    elements.openSidebar.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    elements.sidebar.classList.remove("open");
    elements.openSidebar.setAttribute("aria-expanded", "false");
  }

  function indexPages(nodes, trail) {
    for (const node of nodes) {
      const nextTrail = [...trail, node];

      if (node.path) {
        pageIndex.set(normalizePath(node.path), nextTrail);
      }

      if (node.children) {
        indexPages(node.children, nextTrail);
      }
    }
  }

  function getTrail(path) {
    return pageIndex.get(normalizePath(path)) || [];
  }

  function getLabel(node) {
    return node.labels?.[currentLanguage] || node.labels?.en || readableName(node.path || "");
  }

  function readableName(path) {
    const file = String(path).split("/").pop() || "Page";
    return file
      .replace(/\.md$/i, "")
      .replace(/README/i, "Overview")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  function slugify(value) {
    return String(value)
      .trim()
      .toLowerCase()
      .replace(/[`~!@#$%^&*()+=[\]{};:"'<>?,./\\|]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-") || "section";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getSavedLanguage() {
    const saved = window.localStorage.getItem("wikiLanguage");
    return LANGUAGES.includes(saved) ? saved : "en";
  }

  function saveLanguage(language) {
    if (LANGUAGES.includes(language)) {
      window.localStorage.setItem("wikiLanguage", language);
    }
  }
})();
