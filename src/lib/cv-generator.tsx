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

// Styles pour le PDF avec un design moderne et épuré
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: '3px solid #000000',
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  role: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
    fontWeight: 'normal',
  },
  location: {
    fontSize: 10,
    color: '#777',
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
    flexWrap: 'wrap',
  },
  contactItem: {
    fontSize: 9,
    color: '#0066cc',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottom: '2px solid #000000',
    paddingBottom: 6,
  },
  summary: {
    fontSize: 10,
    color: '#333',
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 14,
    paddingBottom: 10,
    borderBottom: '1px solid #e8e8e8',
  },
  company: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 3,
  },
  position: {
    fontSize: 11,
    color: '#444',
    marginBottom: 3,
    fontStyle: 'italic',
  },
  period: {
    fontSize: 9,
    color: '#666',
    marginBottom: 6,
  },
  description: {
    fontSize: 9,
    color: '#444',
    lineHeight: 1.5,
  },
  descriptionList: {
    paddingLeft: 10,
    marginTop: 4,
  },
  descriptionItem: {
    fontSize: 9,
    color: '#333',
    lineHeight: 1.5,
    marginBottom: 3,
  },
  descriptionSubItem: {
    fontSize: 8,
    color: '#444',
    lineHeight: 1.4,
    marginBottom: 2,
    paddingLeft: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skill: {
    fontSize: 9,
    color: '#000000',
    backgroundColor: '#f0f0f0',
    padding: '5 10',
    borderRadius: 3,
    border: '1px solid #ddd',
  },
  languagesContainer: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap',
  },
  languageItem: {
    marginBottom: 6,
    minWidth: 100,
  },
  languageName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  languageLevel: {
    fontSize: 9,
    color: '#555',
  },
  educationItem: {
    marginBottom: 12,
    paddingBottom: 8,
    borderBottom: '1px solid #f0f0f0',
  },
  school: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 3,
  },
  degree: {
    fontSize: 10,
    color: '#444',
    marginBottom: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leftColumn: {
    flex: 1,
  },
  divider: {
    borderBottom: '1px solid #e5e5e5',
    marginVertical: 10,
  },
  certificateItem: {
    marginBottom: 10,
    paddingBottom: 6,
    borderBottom: '1px solid #f5f5f5',
  },
  certificateTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  certificateCompany: {
    fontSize: 9,
    color: '#555',
    marginBottom: 2,
  },
  certificateYear: {
    fontSize: 8,
    color: '#777',
  },
  hobbiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
  hobbyItem: {
    width: '30%',
    marginBottom: 10,
  },
  hobbyName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 3,
  },
  hobbyDescription: {
    fontSize: 8,
    color: '#555',
    lineHeight: 1.4,
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
  }>;
  education: ReadonlyArray<{
    school: string;
    degree: string;
    start: string;
    end: string;
  }>;
  certificates: ReadonlyArray<{
    title: string;
    company: string;
    start: string;
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

// Composant Document PDF
export const CVDocument = ({ data }: { data: CVData }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
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

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.summary}>{data.summary}</Text>
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        {data.work.map((work, index) => {
          const descriptions = extractTextFromDescription(work.description);
          return (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.company}>{work.company}</Text>
              <Text style={styles.position}>{work.title}</Text>
              <Text style={styles.period}>
                {work.start} - {work.end || 'Present'} • {work.location}
              </Text>
              <View style={styles.descriptionList}>
                {descriptions.map((desc, idx) => {
                  // Détection des sous-éléments (commencent par des espaces)
                  const isSubItem = desc.startsWith('  ');
                  const cleanDesc = desc.trim();

                  return (
                    <Text
                      key={idx}
                      style={
                        isSubItem
                          ? styles.descriptionSubItem
                          : styles.descriptionItem
                      }
                    >
                      {isSubItem ? '  ◦ ' : '• '}
                      {cleanDesc}
                    </Text>
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
            <Text style={styles.school}>{edu.school}</Text>
            <Text style={styles.degree}>{edu.degree}</Text>
            <Text style={styles.period}>
              {edu.start} - {edu.end}
            </Text>
          </View>
        ))}
      </View>

      {/* Certificates */}
      <View style={styles.section} break>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
          {data.certificates.map((cert, index) => (
            <View
              key={index}
              style={[styles.certificateItem, { width: '48%' }]}
            >
              <Text style={styles.certificateTitle}>{cert.title}</Text>
              <Text style={styles.certificateCompany}>{cert.company}</Text>
              <Text style={styles.certificateYear}>{cert.start}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {data.skills.map((skill, index) => (
            <Text key={index} style={styles.skill}>
              {skill}
            </Text>
          ))}
        </View>
      </View>

      {/* Languages */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <View style={styles.languagesContainer}>
          {data.languages.map((lang, index) => (
            <View key={index} style={styles.languageItem}>
              <Text style={styles.languageName}>{lang.name}</Text>
              <Text style={styles.languageLevel}>{lang.level}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Hobbies */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hobbies & Interests</Text>
        <View style={styles.hobbiesContainer}>
          {data.hobbies.map((hobby, index) => (
            <View key={index} style={styles.hobbyItem}>
              <Text style={styles.hobbyName}>{hobby.name}</Text>
              {hobby.description && (
                <Text style={styles.hobbyDescription}>{hobby.description}</Text>
              )}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);
