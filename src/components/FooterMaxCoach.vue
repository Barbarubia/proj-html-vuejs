<template>
  <footer>
      <div class="container-900">
        <!-- Parte sinistra del footer con indirizzo, contatti e socials -->
        <div class="column">
          <ul class="footer-list footer-list-contacts">
              <li><h3>Address</h3></li>
              <li v-for="element in objContacts" :key="element">{{ element }}</li>
          </ul>
          <div class="links-socials">
            <a v-for="social in arrLinksSocials" :key="social.name" :href="social.href"><font-awesome-icon :icon="'fa-brands ' + social.icon" /></a>
          </div>
        </div>
        <!-- Parte destra del footer con tutti i link -->
        <div class="column">
          <ul class="footer-list">
              <li v-for="(element, index) in arrLinksFooter" :key="index">
                  <h3 v-if="element.category !== ''">{{ element.category }}</h3>
                  <h3 v-else class="blank-h3"></h3>
                  <ul class="footer-sublist">
                      <li v-for="(sublink, subindex) in element.subLinks" :key="subindex"><a href="sublink.href">{{ sublink.name }}</a></li>
                  </ul>
              </li>
          </ul>
        </div>
      </div>
      <!-- Copyright -->
      <div class="container-900 copyright">
        <font-awesome-icon icon="fa-regular fa-copyright" />&nbsp;2022 Maxcoach. All Rights Reserved
      </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterMaxCoach',
  data () {
    return {
      objContacts: {
        address: '382 NE 191st St # 87394 Miami, FL 33179-3899',
        telephone: '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
        eMail: 'support@maxcoach.com'
      },
      arrLinksSocials: [
        {
          name: 'Facebook',
          href: '#',
          icon: 'fa-facebook-square'
        },
        {
          name: 'Twitter',
          href: '#',
          icon: 'fa-twitter'
        },
        {
          name: 'Instagram',
          href: '#',
          icon: 'fa-instagram'
        },
        {
          name: 'Linkedin',
          href: '#',
          icon: 'fa-linkedin'
        }
      ],
      arrLinksFooter: [
        {
          category: 'Explore',
          subLinks: [
            {
              href: '#',
              name: 'Start here'
            },
            {
              href: '#',
              name: 'Blog'
            },
            {
              href: '#',
              name: 'About us'
            }
          ]
        },
        {
          category: '',
          subLinks: [
            {
              href: '#',
              name: 'Success story'
            },
            {
              href: '#',
              name: 'Courses'
            },
            {
              href: '#',
              name: 'Contact us'
            }
          ]
        },
        {
          category: 'Information',
          subLinks: [
            {
              href: '#',
              name: 'Membership'
            },
            {
              href: '#',
              name: 'Purchase guide'
            },
            {
              href: '#',
              name: 'Privacy policy'
            },
            {
              href: '#',
              name: 'Terms of service'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";
@import "../assets/scss/partials/general";

footer {
  padding: 3rem 0;
  background-color: #171621;
  color: $cc-silver;
  .container-900 {
    display: flex;
    .column {
      width: 50%;
      .footer-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 3rem;
        &.footer-list-contacts {
          flex-direction: column;
        }
        h3 {
          font-size: 1rem;
          color: $cc-white;
        }
        .blank-h3::after {
          content: '\00a0';
        }
        .footer-sublist {
          list-style: none;
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
          gap: 1rem;
        }
        a {
          text-decoration: none;
          color: $cc-silver;
        }
      }
      .links-socials {
        margin-top: 2rem;
        font-size: 1.5rem;
        display: flex;
        gap: 1rem;
        a {
          color: $cc-silver;
        }
      }
    }
    &.copyright {
      margin-top: 3rem;
      justify-content: center;
    }
  }
}
</style>
