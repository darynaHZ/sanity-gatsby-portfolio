export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6154a9f2018de300c11c98a5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bhhpg3o7',
                  apiId: '6f206069-4220-4c71-81f2-d27a6cbffce0'
                },
                {
                  buildHookId: '6154a9f25d5ccf00a9dd2936',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vxhnhhzg',
                  apiId: '3d734361-44a7-496f-9ab1-3b19608c8fea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/darynaHZ/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vxhnhhzg.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
