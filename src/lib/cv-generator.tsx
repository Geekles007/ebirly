import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from '@react-pdf/renderer';
import { ReactElement } from 'react';

/* ─── Fonts ──────────────────────────────────────── */
Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',  fontWeight: 400 },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',       fontWeight: 600 },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf',       fontWeight: 700 },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-italic.ttf',    fontStyle: 'italic' },
  ],
});

/* ─── Design tokens ──────────────────────────────── */
const C = {
  black:    '#0a0a0a',
  dark:     '#1a1a1a',
  white:    '#ffffff',
  accent:   '#c6ff3d',
  muted:    '#5a5a5a',
  faint:    '#8a8a8a',
  border:   '#e0e0e0',
  surface:  '#f6f6f6',
  line:     '#d0d0d0',
};

/* ─── Styles ─────────────────────────────────────── */
const s = StyleSheet.create({
  page: {
    backgroundColor: C.white,
    fontFamily: 'Open Sans',
    fontSize: 10,
    color: C.dark,
  },

  /* Header */
  header: {
    backgroundColor: C.black,
    padding: '36 40 28 40',
  },
  headerName: {
    fontSize: 32,
    fontWeight: 700,
    color: C.white,
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  headerRole: {
    fontSize: 11,
    color: C.accent,
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 14,
  },
  headerDivider: {
    height: 1,
    backgroundColor: '#2a2a2a',
    marginBottom: 14,
  },
  headerContacts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  headerContact: {
    fontSize: 9,
    color: '#aaaaaa',
    letterSpacing: 0.3,
  },
  headerContactLink: {
    fontSize: 9,
    color: '#aaaaaa',
    letterSpacing: 0.3,
    textDecoration: 'none',
  },

  /* Layout */
  body: {
    flexDirection: 'row',
    flex: 1,
  },
  main: {
    flex: 1,
    padding: '28 24 28 40',
    borderRight: `1px solid ${C.border}`,
  },
  sidebar: {
    width: 188,
    padding: '28 28 28 20',
    backgroundColor: C.surface,
  },

  /* Section */
  section: {
    marginBottom: 22,
  },
  sectionLabel: {
    fontSize: 8,
    fontWeight: 700,
    color: C.faint,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: C.black,
    letterSpacing: -0.3,
    marginBottom: 14,
    paddingBottom: 8,
    borderBottom: `2px solid ${C.black}`,
  },
  sectionTitleSm: {
    fontSize: 9,
    fontWeight: 700,
    color: C.black,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    marginBottom: 12,
    paddingBottom: 6,
    borderBottom: `1px solid ${C.line}`,
  },

  /* Summary */
  summary: {
    fontSize: 10,
    color: C.muted,
    lineHeight: 1.75,
  },

  /* Experience */
  expItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottom: `1px solid ${C.border}`,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  expRole: {
    fontSize: 11,
    fontWeight: 700,
    color: C.black,
  },
  expDate: {
    fontSize: 8,
    color: C.faint,
    fontStyle: 'italic',
    letterSpacing: 0.3,
    marginTop: 1,
  },
  expCompany: {
    fontSize: 9,
    color: C.accent,
    fontWeight: 600,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 2,
    backgroundColor: C.black,
    padding: '2 6',
    alignSelf: 'flex-start',
  },
  expLocation: {
    fontSize: 8.5,
    color: C.faint,
    marginBottom: 8,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  bulletDot: {
    width: 10,
    fontSize: 9,
    color: C.accent,
    fontWeight: 700,
    marginTop: 1,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: C.muted,
    lineHeight: 1.6,
  },
  bulletSubDot: {
    width: 14,
    fontSize: 8,
    color: C.faint,
    marginTop: 1,
  },
  bulletSubText: {
    flex: 1,
    fontSize: 8.5,
    color: C.faint,
    lineHeight: 1.6,
  },

  /* Education */
  eduItem: {
    marginBottom: 14,
    paddingBottom: 12,
    borderBottom: `1px solid ${C.border}`,
  },
  eduSchool: {
    fontSize: 10.5,
    fontWeight: 700,
    color: C.black,
    marginBottom: 2,
  },
  eduDegree: {
    fontSize: 9,
    color: C.muted,
    lineHeight: 1.5,
    marginBottom: 3,
  },
  eduDate: {
    fontSize: 8,
    color: C.faint,
    fontStyle: 'italic',
  },

  /* Skills */
  skillsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skillBadge: {
    fontSize: 8,
    color: C.dark,
    backgroundColor: C.white,
    border: `1px solid ${C.line}`,
    padding: '4 8',
    fontWeight: 600,
  },

  /* Languages */
  langItem: {
    marginBottom: 10,
  },
  langName: {
    fontSize: 10,
    fontWeight: 700,
    color: C.black,
    marginBottom: 1,
  },
  langLevel: {
    fontSize: 8,
    color: C.faint,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  langBarBg: {
    height: 3,
    backgroundColor: C.line,
  },
  langBarFill: {
    height: 3,
    backgroundColor: C.accent,
  },

  /* Certificates */
  certItem: {
    marginBottom: 10,
    paddingBottom: 8,
    borderBottom: `1px solid ${C.border}`,
  },
  certTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: C.black,
    lineHeight: 1.4,
    marginBottom: 2,
  },
  certMeta: {
    fontSize: 8,
    color: C.faint,
    letterSpacing: 0.3,
  },
  certLink: {
    fontSize: 7.5,
    color: C.accent,
    textDecoration: 'none',
    marginTop: 2,
  },
});

/* ─── Types ──────────────────────────────────────── */
export interface CVData {
  name: string;
  location: string;
  description: string;
  summary: string;
  contact: {
    email: string;
    tel: string;
    social: {
      GitHub?:   { url: string };
      LinkedIn?: { url: string };
      Dribbble?: { url: string };
      X?:        { url: string };
      [key: string]: { url: string } | undefined;
    };
  };
  skills:       ReadonlyArray<string>;
  languages:    ReadonlyArray<{ name: string; level: string }>;
  work:         ReadonlyArray<{ company: string; title: string; start: string; end?: string; location: string; description: ReactElement | string }>;
  education:    ReadonlyArray<{ school: string; degree: string; start: string; end: string }>;
  certificates: ReadonlyArray<{ title: string; company: string; start: string; href?: string }>;
  hobbies:      ReadonlyArray<{ name: string; description: string }>;
}

/* ─── JSX → text extractor ───────────────────────── */
const extractText = (node: ReactElement | string, depth = 0): string[] => {
  if (typeof node === 'string') return node.trim() ? [node.trim()] : [];
  if (!node?.props) return [];

  const { children } = node.props;
  if (!children) return [];

  const processChild = (child: any, d: number): string[] => {
    if (typeof child === 'string') return child.trim() ? [child.trim()] : [];
    if (!child?.props) return [];

    if (child.props.href) {
      const text = typeof child.props.children === 'string'
        ? child.props.children.trim()
        : child.props.href;
      return text ? [`  ${text}`] : [];
    }

    if (child.props.children) {
      if (Array.isArray(child.props.children)) {
        return child.props.children.flatMap((c: any) => {
          if (typeof c === 'string') return c.trim() ? [c.trim()] : [];
          if (c?.props?.href) {
            const t = typeof c.props.children === 'string' ? c.props.children.trim() : c.props.href;
            return t ? [`  ${t}`] : [];
          }
          if (c?.props?.children) return processChild(c, d + 1);
          return [];
        });
      }
      if (typeof child.props.children === 'string') {
        const t = child.props.children.trim();
        return t ? [t] : [];
      }
      return processChild(child.props.children, d);
    }
    return [];
  };

  if (Array.isArray(children)) return children.flatMap((c) => processChild(c, depth)).filter(Boolean);
  if (typeof children === 'string') return children.trim() ? [children.trim()] : [];
  if (typeof children === 'object') return processChild(children, depth);
  return [];
};

/* ─── Language level → % ─────────────────────────── */
const langPct = (level: string): number => {
  const map: Record<string, number> = {
    native: 100, bilingual: 100, fluent: 90, professional: 80,
    advanced: 70, intermediate: 50, 'level b2': 65, elementary: 30, beginner: 20, 'a1': 15,
  };
  const key = level.toLowerCase();
  for (const [k, v] of Object.entries(map)) {
    if (key.includes(k)) return v;
  }
  return 50;
};

/* ─── PDF Document ───────────────────────────────── */
export const CVDocument = ({ data }: { data: CVData }) => (
  <Document title={`${data.name} — CV`} author={data.name}>
    <Page size="A4" style={s.page}>

      {/* ── Header ── */}
      <View style={s.header}>
        <Text style={s.headerName}>{data.name}</Text>
        <Text style={s.headerRole}>{data.description}</Text>
        <View style={s.headerDivider} />
        <View style={s.headerContacts}>
          <Link style={s.headerContactLink} src={`mailto:${data.contact.email}`}>
            {data.contact.email}
          </Link>
          <Text style={s.headerContact}>{data.contact.tel}</Text>
          <Text style={s.headerContact}>{data.location}</Text>
          {data.contact.social.GitHub && (
            <Link style={s.headerContactLink} src={data.contact.social.GitHub.url}>
              github.com/Geekles007
            </Link>
          )}
          {data.contact.social.LinkedIn && (
            <Link style={s.headerContactLink} src={data.contact.social.LinkedIn.url}>
              linkedin.com/in/lee-tondji-niat
            </Link>
          )}
          {data.contact.social.Dribbble && (
            <Link style={s.headerContactLink} src={data.contact.social.Dribbble.url}>
              dribbble.com/ibirddesign
            </Link>
          )}
        </View>
      </View>

      {/* ── Body ── */}
      <View style={s.body}>

        {/* ── Main column ── */}
        <View style={s.main}>

          {/* Summary */}
          <View style={s.section}>
            <Text style={s.sectionLabel}>01 —</Text>
            <Text style={s.sectionTitle}>Profile</Text>
            <Text style={s.summary}>{data.summary}</Text>
          </View>

          {/* Work */}
          <View style={s.section}>
            <Text style={s.sectionLabel}>02 —</Text>
            <Text style={s.sectionTitle}>Experience</Text>
            {data.work.map((w, i) => {
              const bullets = extractText(w.description);
              return (
                <View key={i} style={s.expItem} wrap={false}>
                  <View style={s.expHeader}>
                    <Text style={s.expRole}>{w.title}</Text>
                    <Text style={s.expDate}>{w.start} — {w.end || 'Present'}</Text>
                  </View>
                  <Text style={s.expCompany}>{w.company}</Text>
                  {w.location ? <Text style={s.expLocation}>{w.location}</Text> : null}
                  <View style={{ marginTop: 6 }}>
                    {bullets.map((b, j) => {
                      const isSub = b.startsWith('  ');
                      return (
                        <View key={j} style={s.bulletRow}>
                          <Text style={isSub ? s.bulletSubDot : s.bulletDot}>{isSub ? '◦' : '▸'}</Text>
                          <Text style={isSub ? s.bulletSubText : s.bulletText}>{b.trim()}</Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>

          {/* Education */}
          <View style={s.section}>
            <Text style={s.sectionLabel}>03 —</Text>
            <Text style={s.sectionTitle}>Education</Text>
            {data.education.map((e, i) => (
              <View key={i} style={s.eduItem} wrap={false}>
                <Text style={s.eduSchool}>{e.school}</Text>
                <Text style={s.eduDegree}>{e.degree}</Text>
                <Text style={s.eduDate}>{e.start} — {e.end}</Text>
              </View>
            ))}
          </View>

        </View>

        {/* ── Sidebar ── */}
        <View style={s.sidebar}>

          {/* Skills */}
          <View style={s.section}>
            <Text style={s.sectionTitleSm}>Skills</Text>
            <View style={s.skillsWrap}>
              {data.skills.map((sk, i) => (
                <Text key={i} style={s.skillBadge}>{sk}</Text>
              ))}
            </View>
          </View>

          {/* Languages */}
          <View style={s.section}>
            <Text style={s.sectionTitleSm}>Languages</Text>
            {data.languages.map((l, i) => (
              <View key={i} style={s.langItem}>
                <Text style={s.langName}>{l.name}</Text>
                <Text style={s.langLevel}>{l.level}</Text>
                <View style={s.langBarBg}>
                  <View style={[s.langBarFill, { width: `${langPct(l.level)}%` }]} />
                </View>
              </View>
            ))}
          </View>

          {/* Certificates */}
          <View style={s.section}>
            <Text style={s.sectionTitleSm}>Certifications</Text>
            {data.certificates.map((c, i) => (
              <View key={i} style={s.certItem} wrap={false}>
                <Text style={s.certTitle}>{c.title}</Text>
                <Text style={s.certMeta}>{c.company} · {c.start}</Text>
              </View>
            ))}
          </View>

          {/* Interests */}
          {data.hobbies.length > 0 && (
            <View style={s.section}>
              <Text style={s.sectionTitleSm}>Interests</Text>
              {data.hobbies.map((h, i) => (
                <View key={i} style={{ marginBottom: 6 }}>
                  <Text style={{ fontSize: 9, fontWeight: 700, color: C.black }}>{h.name}</Text>
                  {h.description ? (
                    <Text style={{ fontSize: 8, color: C.faint, lineHeight: 1.5 }}>{h.description}</Text>
                  ) : null}
                </View>
              ))}
            </View>
          )}

        </View>
      </View>

      {/* ── Footer ── */}
      <View style={{ borderTop: `1px solid ${C.border}`, padding: '10 40', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 7.5, color: C.faint, letterSpacing: 1 }}>
          {data.name.toUpperCase()} — CV 2026
        </Text>
        <Text style={{ fontSize: 7.5, color: C.faint, letterSpacing: 1 }}>
          EBIRLY.COM
        </Text>
      </View>

    </Page>
  </Document>
);
