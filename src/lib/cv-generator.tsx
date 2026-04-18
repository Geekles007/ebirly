import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
  Image,
} from '@react-pdf/renderer';
import { ReactElement } from 'react';

// Register custom fonts for a professional look
Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
      fontWeight: 600,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf',
      fontWeight: 700,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-italic.ttf',
      fontStyle: 'italic',
    },
  ],
});

// Modern color palette
const colors = {
  primary: '#2563eb', // Modern blue
  primaryDark: '#1e40af',
  secondary: '#475569', // Slate gray
  accent: '#0ea5e9', // Bright cyan
  text: {
    primary: '#0f172a', // Almost black
    secondary: '#475569', // Medium gray
    light: '#64748b', // Light gray
  },
  background: {
    white: '#ffffff',
    light: '#f8fafc',
    gray: '#f1f5f9',
  },
  border: {
    light: '#e2e8f0',
    medium: '#cbd5e1',
  },
};

// Styles pour le PDF avec un design moderne et professionnel
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background.white,
    padding: 0,
    fontFamily: 'Open Sans',
  },
  // Header avec fond coloré
  headerContainer: {
    backgroundColor: colors.primary,
    padding: '35 40',
    marginBottom: 0,
  },
  name: {
    fontSize: 42,
    fontWeight: 700,
    color: colors.background.white,
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  role: {
    fontSize: 16,
    color: colors.background.light,
    marginBottom: 8,
    fontWeight: 400,
    letterSpacing: 0.3,
  },
  location: {
    fontSize: 11,
    color: colors.background.light,
    marginBottom: 14,
    opacity: 0.9,
  },
  contactInfo: {
    flexDirection: 'row',
    gap: 18,
    marginTop: 4,
    flexWrap: 'wrap',
  },
  contactItem: {
    fontSize: 10,
    color: colors.background.white,
    textDecoration: 'none',
    opacity: 0.95,
  },
  // Conteneur principal
  mainContent: {
    padding: '0 40 40 40',
  },
  // Deux colonnes layout
  twoColumnLayout: {
    flexDirection: 'row',
    gap: 30,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    width: 200,
  },
  section: {
    marginBottom: 22,
    marginTop: 22,
  },
  sectionCompact: {
    marginBottom: 18,
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: colors.primary,
    marginBottom: 14,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    paddingBottom: 6,
    borderBottom: `3px solid ${colors.primary}`,
  },
  sectionTitleSidebar: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.text.primary,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingBottom: 5,
    borderBottom: `2px solid ${colors.border.medium}`,
  },
  summary: {
    fontSize: 10.5,
    color: colors.text.secondary,
    lineHeight: 1.7,
    textAlign: 'justify',
  },
  // Experience styles avec carte moderne
  experienceItem: {
    marginBottom: 16,
    paddingBottom: 14,
    paddingLeft: 14,
    borderLeft: `3px solid ${colors.background.gray}`,
  },
  experienceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 4,
  },
  logo: {
    width: 24,
    height: 24,
    objectFit: 'contain',
  },
  company: {
    fontSize: 13,
    fontWeight: 700,
    color: colors.text.primary,
    flex: 1,
  },
  position: {
    fontSize: 11.5,
    color: colors.primary,
    marginBottom: 4,
    fontWeight: 600,
  },
  period: {
    fontSize: 9.5,
    color: colors.text.light,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 10,
    color: colors.text.secondary,
    lineHeight: 1.6,
  },
  descriptionList: {
    paddingLeft: 0,
    marginTop: 8,
    gap: 3,
  },
  descriptionItem: {
    fontSize: 9.5,
    color: colors.text.secondary,
    lineHeight: 1.7,
    marginBottom: 3,
    paddingLeft: 12,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.background.light,
    borderRadius: 2,
  },
  descriptionSubItem: {
    fontSize: 9,
    color: colors.text.light,
    lineHeight: 1.6,
    marginBottom: 3,
    paddingLeft: 24,
    paddingRight: 8,
    paddingTop: 3,
    paddingBottom: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 2,
  },
  // Skills avec design moderne
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  skill: {
    fontSize: 9,
    color: colors.text.primary,
    backgroundColor: colors.background.gray,
    padding: '6 12',
    borderRadius: 4,
    fontWeight: 600,
  },
  // Languages avec barre de progression visuelle
  languagesContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  languageItem: {
    marginBottom: 4,
  },
  languageName: {
    fontSize: 10.5,
    fontWeight: 700,
    color: colors.text.primary,
    marginBottom: 4,
  },
  languageLevel: {
    fontSize: 9,
    color: colors.text.secondary,
    marginBottom: 3,
  },
  languageBar: {
    height: 6,
    backgroundColor: colors.background.gray,
    borderRadius: 3,
    overflow: 'hidden',
  },
  languageBarFill: {
    height: 6,
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  // Education avec design épuré
  educationItem: {
    marginBottom: 14,
    paddingBottom: 10,
    paddingLeft: 12,
    borderLeft: `2px solid ${colors.background.gray}`,
  },
  educationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  educationLogo: {
    width: 20,
    height: 20,
    objectFit: 'contain',
  },
  school: {
    fontSize: 11.5,
    fontWeight: 700,
    color: colors.text.primary,
    flex: 1,
  },
  degree: {
    fontSize: 10.5,
    color: colors.text.secondary,
    marginBottom: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  divider: {
    borderBottom: `1px solid ${colors.border.light}`,
    marginVertical: 10,
  },
  // Certificates avec carte
  certificateItem: {
    marginBottom: 12,
    paddingBottom: 8,
    borderBottom: `1px solid ${colors.border.light}`,
  },
  certificateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 3,
  },
  certificateLogo: {
    width: 18,
    height: 18,
    objectFit: 'contain',
  },
  certificateTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.text.primary,
    flex: 1,
  },
  certificateCompany: {
    fontSize: 9,
    color: colors.text.secondary,
    marginBottom: 2,
  },
  certificateYear: {
    fontSize: 8.5,
    color: colors.text.light,
    fontStyle: 'italic',
  },
  // Hobbies avec icônes
  hobbiesContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  hobbyItem: {
    marginBottom: 6,
    paddingLeft: 10,
    borderLeft: `2px solid ${colors.background.gray}`,
  },
  hobbyName: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.text.primary,
    marginBottom: 3,
  },
  hobbyDescription: {
    fontSize: 9,
    color: colors.text.secondary,
    lineHeight: 1.5,
  },
  // Bullet points personnalisés
  bulletPoint: {
    color: colors.primary,
    fontWeight: 700,
    marginRight: 10,
    marginTop: 1,
    fontSize: 8,
    width: 12,
  },
  bulletPointSub: {
    color: colors.accent,
    fontWeight: 600,
    marginRight: 10,
    marginTop: 1,
    fontSize: 7,
    width: 12,
  },
  listItemText: {
    flex: 1,
    paddingTop: 0,
  },
  header: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: '3px solid #000000',
  },
});

interface CVData {
  name: string;
  location: string;
  description: string;
  summary: string;
  contact: {
    email: string;
    tel: string;
    social: {
      GitHub?: { url: string };
      LinkedIn?: { url: string };
      [key: string]: { url: string } | undefined;
    };
  };
  skills: ReadonlyArray<string>;
  languages: ReadonlyArray<{
    name: string;
    level: string;
  }>;
  work: ReadonlyArray<{
    company: string;
    title: string;
    start: string;
    end?: string;
    location: string;
    description: ReactElement | string;
    logoUrl?: string;
  }>;
  education: ReadonlyArray<{
    school: string;
    degree: string;
    start: string;
    end: string;
    logoUrl?: string;
  }>;
  certificates: ReadonlyArray<{
    title: string;
    company: string;
    start: string;
    logoUrl?: string;
  }>;
  hobbies: ReadonlyArray<{
    name: string;
    description: string;
  }>;
}

// Fonction pour extraire le texte des descriptions de manière récursive
const extractTextFromDescription = (
  description: ReactElement | string,
  depth: number = 0
): string[] => {
  if (typeof description === 'string') {
    return description.trim() ? [description.trim()] : [];
  }

  if (!description || !description.props) {
    return [];
  }

  const { children } = description.props;

  if (!children) {
    return [];
  }

  const processChild = (child: any, currentDepth: number): string[] => {
    if (typeof child === 'string') {
      return child.trim() ? [child.trim()] : [];
    }

    if (child && typeof child === 'object' && child.props) {
      // Gestion spéciale des liens
      if (child.props.href) {
        const linkText =
          typeof child.props.children === 'string'
            ? child.props.children.trim()
            : child.props.href;
        return linkText ? [`  ${linkText}`] : [];
      }

      // Gestion des listes imbriquées
      if (child.props.children) {
        if (Array.isArray(child.props.children)) {
          const results: string[] = [];

          child.props.children.forEach((c: any) => {
            if (typeof c === 'string') {
              const text = c.trim();
              if (text) {
                results.push(text);
              }
            } else if (c && typeof c === 'object' && c.props) {
              // Gestion des liens
              if (c.props.href) {
                const linkText =
                  typeof c.props.children === 'string'
                    ? c.props.children.trim()
                    : c.props.href;
                if (linkText) {
                  results.push(`  ${linkText}`);
                }
              }
              // Gestion des sous-listes (ul/ol dans li)
              else if (c.props.children) {
                const subItems = processChild(c, currentDepth + 1);
                results.push(...subItems);
              }
            }
          });

          return results;
        }

        if (typeof child.props.children === 'string') {
          const text = child.props.children.trim();
          return text ? [text] : [];
        }

        // Récursion pour les objets
        return processChild(child.props.children, currentDepth);
      }
    }

    return [];
  };

  if (Array.isArray(children)) {
    return children
      .flatMap((child) => processChild(child, depth))
      .filter((text) => text !== '');
  }

  if (typeof children === 'string') {
    return children.trim() ? [children.trim()] : [];
  }

  // Cas récursif pour les objets
  if (typeof children === 'object') {
    return processChild(children, depth);
  }

  return [];
};

// Helper function to get language proficiency percentage
const getLanguageProficiency = (level: string): number => {
  const levelMap: { [key: string]: number } = {
    Native: 100,
    Bilingual: 100,
    Fluent: 90,
    Professional: 80,
    Advanced: 70,
    Intermediate: 50,
    Elementary: 30,
    Beginner: 20,
  };

  // Try to find matching level (case insensitive)
  for (const [key, value] of Object.entries(levelMap)) {
    if (level.toLowerCase().includes(key.toLowerCase())) {
      return value;
    }
  }

  return 50; // Default to intermediate if no match
};

// Composant Document PDF avec design moderne
export const CVDocument = ({ data }: { data: CVData }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      {/* Header moderne avec fond coloré */}
      <View style={styles.headerContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.role}>{data.description}</Text>
        <Text style={styles.location}>{data.location}</Text>

        <View style={styles.contactInfo}>
          <Link style={styles.contactItem} src={`mailto:${data.contact.email}`}>
            {data.contact.email}
          </Link>
          <Text style={styles.contactItem}>{data.contact.tel}</Text>
          {data.contact.social.GitHub && (
            <Link
              style={styles.contactItem}
              src={data.contact.social.GitHub.url}
            >
              GitHub
            </Link>
          )}
          {data.contact.social.LinkedIn && (
            <Link
              style={styles.contactItem}
              src={data.contact.social.LinkedIn.url}
            >
              LinkedIn
            </Link>
          )}
        </View>
      </View>

      {/* Contenu principal */}
      <View style={styles.mainContent}>
        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Profile</Text>
          <Text style={styles.summary}>{data.summary}</Text>
        </View>

        {/* Layout deux colonnes pour le contenu principal */}
        <View style={styles.twoColumnLayout}>
          {/* Colonne principale (gauche) */}
          <View style={styles.leftColumn}>
            {/* Work Experience */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Work Experience</Text>
              {data.work.map((work, index) => {
                const descriptions = extractTextFromDescription(
                  work.description
                );
                return (
                  <View key={index} style={styles.experienceItem}>
                    <View style={styles.experienceHeader}>
                      {work.logoUrl && (
                        <Image src={work.logoUrl} style={styles.logo} />
                      )}
                      <Text style={styles.company}>{work.company}</Text>
                    </View>
                    <Text style={styles.position}>{work.title}</Text>
                    <Text style={styles.period}>
                      {work.start} - {work.end || 'Present'} • {work.location}
                    </Text>
                    <View style={styles.descriptionList}>
                      {descriptions.map((desc, idx) => {
                        const isSubItem = desc.startsWith('  ');
                        const cleanDesc = desc.trim();

                        return (
                          <View
                            key={idx}
                            style={
                              isSubItem
                                ? styles.descriptionSubItem
                                : styles.descriptionItem
                            }
                            wrap={false}
                          >
                            <Text
                              style={
                                isSubItem
                                  ? styles.bulletPointSub
                                  : styles.bulletPoint
                              }
                            >
                              {isSubItem ? '◦' : '●'}
                            </Text>
                            <Text style={styles.listItemText}>{cleanDesc}</Text>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                );
              })}
            </View>

            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {data.education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <View style={styles.educationHeader}>
                    {edu.logoUrl && (
                      <Image src={edu.logoUrl} style={styles.educationLogo} />
                    )}
                    <Text style={styles.school}>{edu.school}</Text>
                  </View>
                  <Text style={styles.degree}>{edu.degree}</Text>
                  <Text style={styles.period}>
                    {edu.start} - {edu.end}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Colonne sidebar (droite) */}
          <View style={styles.rightColumn}>
            {/* Skills */}
            <View style={styles.sectionCompact}>
              <Text style={styles.sectionTitleSidebar}>Skills</Text>
              <View style={styles.skillsContainer}>
                {data.skills.map((skill, index) => (
                  <Text key={index} style={styles.skill}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>

            {/* Languages avec barres de progression */}
            <View style={styles.sectionCompact}>
              <Text style={styles.sectionTitleSidebar}>Languages</Text>
              <View style={styles.languagesContainer}>
                {data.languages.map((lang, index) => {
                  const proficiency = getLanguageProficiency(lang.level);
                  return (
                    <View key={index} style={styles.languageItem}>
                      <Text style={styles.languageName}>{lang.name}</Text>
                      <Text style={styles.languageLevel}>{lang.level}</Text>
                      <View style={styles.languageBar}>
                        <View
                          style={[
                            styles.languageBarFill,
                            { width: `${proficiency}%` },
                          ]}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>

            {/* Hobbies */}
            <View style={styles.sectionCompact}>
              <Text style={styles.sectionTitleSidebar}>Interests</Text>
              <View style={styles.hobbiesContainer}>
                {data.hobbies.map((hobby, index) => (
                  <View key={index} style={styles.hobbyItem}>
                    <Text style={styles.hobbyName}>{hobby.name}</Text>
                    {hobby.description && (
                      <Text style={styles.hobbyDescription}>
                        {hobby.description}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Certificates en pleine largeur */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {data.certificates.map((cert, index) => (
              <View
                key={index}
                style={[styles.certificateItem, { width: '48%' }]}
                wrap={false}
              >
                <View style={styles.certificateHeader}>
                  {cert.logoUrl && (
                    <Image src={cert.logoUrl} style={styles.certificateLogo} />
                  )}
                  <Text style={styles.certificateTitle}>{cert.title}</Text>
                </View>
                <Text style={styles.certificateCompany}>{cert.company}</Text>
                <Text style={styles.certificateYear}>{cert.start}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
