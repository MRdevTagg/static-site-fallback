const getArticleNumberFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('manuscript');
}
 const manuscriptData = {
        9: {
            title: 'Evolution of Peer Review in Scientific Communication',
            doi: '10.31235/osf.io/b2ra3',
            reviews: [],
            authors: [{
                name: 'Dmitry Kochetkov',
                affiliations: [],
            }],
            sections: {
                Abstract: /* html */`<p>It is traditionally believed that peer review is the backbone of anacademicjournal and scientific communication, ensuringhigh quality and trust in the published materials. However, peer review only became an institutionalized practice in the second half of the 20th century, although the first scientific journals appeared three centuries earlier. By the beginning of the 21st century, there emerged an opinion that the traditional model of peer review is in deep crisis. 
                This study aims to synthesize thekeycharacteristics, practices, and outcomes of traditional and innovative peer review models in scholarly publishing.The article discusses the evolution of the institution of scientific peer review and the formation of the current crisis.
                 Weanalyzethe modern landscape of innovations in peer review and scientific communication. Based on this analysis, three main peer review models in relation to editorial workfloware identified: pre-publication peer review (traditional model), registered reports,and post-publication (peer)review (including preprints(peer) review). Wearguethatthe third model offers the best way to implementthe main functions of scientific communication.Keywords:scientific communication, academicjournal, peer review, pre-publication peer review, prereview, post-publication review, preprints, registered reports</p>`,
                Introduction: `<p>International journals often require additional assessment of the level of English.
                 However, this is not a comprehensive list, and the list of criteria to be evaluated may vary from journal to journal. Nevertheless, as early as the beginning of the 21st century, it was argued that the system of peer review is "broken" (McCook, 2006). The main problem noted by McCook is the increasing number of manuscripts and the burden on reviewers. However, this is just the tip of the iceberg. Allen et al. (2022) highlighted the issue of the "black box": the anonymity of traditional peer review should maintain honesty and ethical norms, but it also can stifle discussion, generate biases, and reduce the overall effectiveness of peer review. In fact, the function of being the "supreme judge" in deciding what is "good" and "bad" science is taken on by peer review, defending the dominant scientific paradigm and stifling the emergence of new ideas that always arise on the periphery. However, as academician L.I. Abalkin once remarked, "no one has the right to usurp the truth" (Sukharev, 2020, p. 44). If we do not change our approach, science will either stagnate or transition into other forms of communication. Moreover, the current system has become an "exploitation machine": publishers benefit in most cases, while reviewers work voluntarily. There is a point of view that peer review is included in the implicit contract of the researcher. Nevertheless, given that most of the research and, accordingly, research positions are funded from public funds, we nonetheless observe a tendency to "reap where they did not sow." R. Smith (2006) strongly criticized the review while at the same time comparing it to democracy: 
                
                "a system full of problems but the least worst we have" (p. 178). Is this really the case? And can we talk about peer review as a uniform concept, given the variety of existing models? This study aims to synthesize the key characteristics, practices, and outcomes of traditional and innovative peer review models in scholarly publishing. In the following section, we will attempt to demonstrate how the traditional peer review model has developed and how it has come to the current crisis. Furthermore, we will discuss possible ways to overcome the crisis and how the institution of peer review is evolving in the context of global changes in scientific publishing. A separate section discusses modular publishing, which incorporates various innovations in the publishing process, and in particular, the review process. The scope of this piece is limited to peer review in the context of the publication of scientific articles, but its findings are quite applicable to the publication of books or conference proceedings. At the same time, review for other purposes, e.g., evaluation of grant applications, is a topic for a separate discussion</p>`
            },
            peerReview: '',
        },
        12: {
            meta: {
                doi: '',
                reviews: [],
                authors: [{
                    name: '',
                    reviewNumber: 1,
                }]
            },
            fullText: {
                sections: {
                    abstract: '',
                }
            },
            peerReview: '',
        },
        13: {
            meta: {
                doi: '',
                reviews: [],
                authors: [{
                    name: '',
                    reviewNumber: 1,
                }]
            },
            fullText: {
                sections: {
                    abstract: '',
                }
            },
            peerReview: '',
        },
        14: {
            meta: {
                doi: '',
                reviews: [],
                authors: [{
                    name: '',
                    reviewNumber: 1,
                }]
            },
            fullText: {
                sections: {
                    abstract: '',
                }
            },
            peerReview: '',
        },
        15: {
            meta: {
                doi: '',
                reviews: [],
                authors: [{
                    name: '',
                    reviewNumber: 1,
                }]
            },
            fullText: {
                sections: {
                    abstract: '',
                }
            },
            peerReview: '',
        },
    }

document.addEventListener('DOMContentLoaded', ()=> {
    const $content = document.querySelector('#content');
    const $authorsList = document.querySelector('#author-links');
    const tabs = document.querySelectorAll('.tab');
    const $doi = document.querySelector('#doi');
    const $title = document.querySelector('#title');
    const $articleNav = document.querySelector('#article-nav > ul');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    const articleNumber = getArticleNumberFromURL();
    const manuscript = manuscriptData[articleNumber];
    const { doi, sections, title: manuscriptTitle, authors } = manuscript;


    $authorsList.innerHTML = authors.map((author) => `<a href="#">${author.name}</a>`).join(', ');


    manuscriptTitle && ($title.textContent = manuscriptTitle);
    doi && ($doi.textContent = `https://doi.org/${doi}`);
    doi && ($doi.href = `https://doi.org/${doi}`);
    articleNumber && ($content.innerHTML = '');
    Object.entries(sections).forEach(([k, v]) => {
        const title = document.createElement('h3')
        const sectionContent = document.createElement('p');
        title.id = k;
        title.textContent = k;
        sectionContent.innerHTML = v;
        $content.appendChild(title);
        $content.appendChild(sectionContent);
        $articleNav.innerHTML += `<li><a href="#${k}">${k}</a></li>`;
    });
})
