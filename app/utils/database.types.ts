export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      agents: {
        Row: {
          created_at: string;
          id: number;
          image_id: number | null;
          name: string;
          slug: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          image_id?: number | null;
          name: string;
          slug?: string | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          image_id?: number | null;
          name?: string;
          slug?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "agents_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          }
        ];
      };
      agents_contacts: {
        Row: {
          _order: number;
          _parent_id: number;
          id: string;
          title: string;
          value: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          id: string;
          title: string;
          value: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          id?: string;
          title?: string;
          value?: string;
        };
        Relationships: [
          {
            foreignKeyName: "agents_contacts_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "agents";
            referencedColumns: ["id"];
          }
        ];
      };
      footer: {
        Row: {
          created_at: string | null;
          footer_note: string | null;
          id: number;
          logo_id: number | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          footer_note?: string | null;
          id?: number;
          logo_id?: number | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          footer_note?: string | null;
          id?: number;
          logo_id?: number | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "footer_logo_id_media_id_fk";
            columns: ["logo_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          }
        ];
      };
      footer_navigation_groups: {
        Row: {
          _order: number;
          _parent_id: number;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "footer_navigation_groups_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "footer";
            referencedColumns: ["id"];
          }
        ];
      };
      footer_navigation_groups_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          label: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          label?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          label?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "footer_navigation_groups_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "footer_navigation_groups";
            referencedColumns: ["id"];
          }
        ];
      };
      footer_navigation_groups_navigations: {
        Row: {
          _order: number;
          _parent_id: string;
          icon_id: number | null;
          id: string;
          value: string;
        };
        Insert: {
          _order: number;
          _parent_id: string;
          icon_id?: number | null;
          id: string;
          value: string;
        };
        Update: {
          _order?: number;
          _parent_id?: string;
          icon_id?: number | null;
          id?: string;
          value?: string;
        };
        Relationships: [
          {
            foreignKeyName: "footer_navigation_groups_navigations_icon_id_media_id_fk";
            columns: ["icon_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "footer_navigation_groups_navigations_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "footer_navigation_groups";
            referencedColumns: ["id"];
          }
        ];
      };
      footer_navigation_groups_navigations_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title: string;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title: string;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "footer_navigation_groups_navigations_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "footer_navigation_groups_navigations";
            referencedColumns: ["id"];
          }
        ];
      };
      header: {
        Row: {
          created_at: string | null;
          id: number;
          logo_id: number | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          logo_id?: number | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          logo_id?: number | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "header_logo_id_media_id_fk";
            columns: ["logo_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          }
        ];
      };
      header_navigations: {
        Row: {
          _order: number;
          _parent_id: number;
          icon_id: number | null;
          id: string;
          value: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          icon_id?: number | null;
          id: string;
          value: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          icon_id?: number | null;
          id?: string;
          value?: string;
        };
        Relationships: [
          {
            foreignKeyName: "header_navigations_icon_id_media_id_fk";
            columns: ["icon_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "header_navigations_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "header";
            referencedColumns: ["id"];
          }
        ];
      };
      header_navigations_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title: string;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title: string;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "header_navigations_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "header_navigations";
            referencedColumns: ["id"];
          }
        ];
      };
      media: {
        Row: {
          alt: string | null;
          created_at: string;
          filename: string | null;
          filesize: number | null;
          focal_x: number | null;
          focal_y: number | null;
          height: number | null;
          id: number;
          mime_type: string | null;
          thumbnail_u_r_l: string | null;
          updated_at: string;
          url: string | null;
          width: number | null;
        };
        Insert: {
          alt?: string | null;
          created_at?: string;
          filename?: string | null;
          filesize?: number | null;
          focal_x?: number | null;
          focal_y?: number | null;
          height?: number | null;
          id?: number;
          mime_type?: string | null;
          thumbnail_u_r_l?: string | null;
          updated_at?: string;
          url?: string | null;
          width?: number | null;
        };
        Update: {
          alt?: string | null;
          created_at?: string;
          filename?: string | null;
          filesize?: number | null;
          focal_x?: number | null;
          focal_y?: number | null;
          height?: number | null;
          id?: number;
          mime_type?: string | null;
          thumbnail_u_r_l?: string | null;
          updated_at?: string;
          url?: string | null;
          width?: number | null;
        };
        Relationships: [];
      };
      pages: {
        Row: {
          created_at: string;
          currency: Database["public"]["Enums"]["enum_pages_currency"] | null;
          id: number;
          image_id: number | null;
          keywords: string | null;
          slug: string | null;
          template: Database["public"]["Enums"]["enum_pages_template"] | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          currency?: Database["public"]["Enums"]["enum_pages_currency"] | null;
          id?: number;
          image_id?: number | null;
          keywords?: string | null;
          slug?: string | null;
          template?: Database["public"]["Enums"]["enum_pages_template"] | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          currency?: Database["public"]["Enums"]["enum_pages_currency"] | null;
          id?: number;
          image_id?: number | null;
          keywords?: string | null;
          slug?: string | null;
          template?: Database["public"]["Enums"]["enum_pages_template"] | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_contact_form: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          email_address: string | null;
          id: string;
          phone_number: string | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          email_address?: string | null;
          id: string;
          phone_number?: string | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          email_address?: string | null;
          id?: string;
          phone_number?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_contact_form_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_contact_form_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_contact_form_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_contact_form";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_hero: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
          image_id: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
          image_id?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
          image_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_hero_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "pages_blocks_hero_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_hero_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          subtitle: string | null;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          subtitle?: string | null;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          subtitle?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_hero_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_hero";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_hero_search: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
          search_page_slug: string | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
          search_page_slug?: string | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
          search_page_slug?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_hero_search_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_hero_search_images: {
        Row: {
          _order: number;
          _parent_id: string;
          file_id: number;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: string;
          file_id: number;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: string;
          file_id?: number;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_hero_search_images_file_id_media_id_fk";
            columns: ["file_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "pages_blocks_hero_search_images_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_hero_search";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_hero_search_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          cta: string | null;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          cta?: string | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          cta?: string | null;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_hero_search_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_hero_search";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_links: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_links_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_links_items: {
        Row: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id: number | null;
          item_page_slug: string;
        };
        Insert: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id?: number | null;
          item_page_slug: string;
        };
        Update: {
          _order?: number;
          _parent_id?: string;
          id?: string;
          image_id?: number | null;
          item_page_slug?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_links_items_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "pages_blocks_links_items_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_links";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_links_items_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          label: string;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          label: string;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          label?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_links_items_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_links_items";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_links_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_links_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_links";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_list: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          cta_page_slug: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          cta_page_slug?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          cta_page_slug?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_list_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_list_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          cta: string | null;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          cta?: string | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          cta?: string | null;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_list_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_list";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_map: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          address: string | null;
          block_name: string | null;
          id: string;
          lat: string;
          lng: string;
          name: string | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          address?: string | null;
          block_name?: string | null;
          id: string;
          lat: string;
          lng: string;
          name?: string | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          address?: string | null;
          block_name?: string | null;
          id?: string;
          lat?: string;
          lng?: string;
          name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_map_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_margin: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          background_color: string | null;
          block_name: string | null;
          id: string;
          margin_desktop: number | null;
          margin_mobile: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          background_color?: string | null;
          block_name?: string | null;
          id: string;
          margin_desktop?: number | null;
          margin_mobile?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          background_color?: string | null;
          block_name?: string | null;
          id?: string;
          margin_desktop?: number | null;
          margin_mobile?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_margin_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_rich_text: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_rich_text_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_rich_text_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          content: string | null;
          id: number;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          content?: string | null;
          id?: number;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          content?: string | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_rich_text_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_rich_text";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_search: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          filter_area: string | null;
          filter_price_end: number | null;
          filter_price_start: number | null;
          filter_sort:
            | Database["public"]["Enums"]["enum_pages_blocks_search_sort"]
            | null;
          filter_sub_area: string | null;
          id: string;
          image_id: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          filter_area?: string | null;
          filter_price_end?: number | null;
          filter_price_start?: number | null;
          filter_sort?:
            | Database["public"]["Enums"]["enum_pages_blocks_search_sort"]
            | null;
          filter_sub_area?: string | null;
          id: string;
          image_id?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          filter_area?: string | null;
          filter_price_end?: number | null;
          filter_price_start?: number | null;
          filter_sort?:
            | Database["public"]["Enums"]["enum_pages_blocks_search_sort"]
            | null;
          filter_sub_area?: string | null;
          id?: string;
          image_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_search_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "pages_blocks_search_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_search_filter_ownerships: {
        Row: {
          id: number;
          order: number;
          parent_id: string;
          value:
            | Database["public"]["Enums"]["enum_pages_blocks_search_filter_ownerships"]
            | null;
        };
        Insert: {
          id?: number;
          order: number;
          parent_id: string;
          value?:
            | Database["public"]["Enums"]["enum_pages_blocks_search_filter_ownerships"]
            | null;
        };
        Update: {
          id?: number;
          order?: number;
          parent_id?: string;
          value?:
            | Database["public"]["Enums"]["enum_pages_blocks_search_filter_ownerships"]
            | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_search_filter_ownerships_parent_fk";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_search";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_search_filter_types: {
        Row: {
          id: number;
          order: number;
          parent_id: string;
          value:
            | Database["public"]["Enums"]["enum_pages_blocks_search_filter_types"]
            | null;
        };
        Insert: {
          id?: number;
          order: number;
          parent_id: string;
          value?:
            | Database["public"]["Enums"]["enum_pages_blocks_search_filter_types"]
            | null;
        };
        Update: {
          id?: number;
          order?: number;
          parent_id?: string;
          value?:
            | Database["public"]["Enums"]["enum_pages_blocks_search_filter_types"]
            | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_search_filter_types_parent_fk";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_search";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_search_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          subtitle: string | null;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          subtitle?: string | null;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          subtitle?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_search_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_search";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_c_t_a: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          cta_icon_id: number | null;
          cta_page_slug: string | null;
          id: string;
          image_id: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          cta_icon_id?: number | null;
          cta_page_slug?: string | null;
          id: string;
          image_id?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          cta_icon_id?: number | null;
          cta_page_slug?: string | null;
          id?: string;
          image_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_c_t_a_cta_icon_id_media_id_fk";
            columns: ["cta_icon_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "pages_blocks_section_c_t_a_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "pages_blocks_section_c_t_a_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_c_t_a_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          cta: string | null;
          description: string | null;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          cta?: string | null;
          description?: string | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          cta?: string | null;
          description?: string | null;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_c_t_a_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_section_c_t_a";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_items: {
        Row: {
          _order: number;
          _parent_id: string;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: string;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: string;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_items_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_section";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_items_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          label: string;
          text: string;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          label: string;
          text: string;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          label?: string;
          text?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_items_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_section_items";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          description: string | null;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          description?: string | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          description?: string | null;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_section";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_show_case: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_show_case_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_show_case_items: {
        Row: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: string;
          id?: string;
          image_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_show_case_items_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "pages_blocks_section_show_case_items_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_section_show_case";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_show_case_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_show_case_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_section_show_case";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_slider: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_slider_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_slider_items: {
        Row: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: string;
          id?: string;
          image_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_slider_items_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "pages_blocks_section_slider_items_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_section_slider";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_slider_items_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          content: string;
          id: number;
          name: string;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          content: string;
          id?: number;
          name: string;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          content?: string;
          id?: number;
          name?: string;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_slider_items_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_section_slider_items";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_blocks_section_slider_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_blocks_section_slider_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages_blocks_section_slider";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: number;
          description: string | null;
          id: number;
          title: string;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: number;
          description?: string | null;
          id?: number;
          title: string;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: number;
          description?: string | null;
          id?: number;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "pages_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          }
        ];
      };
      pages_rels: {
        Row: {
          id: number;
          order: number | null;
          parent_id: number;
          path: string;
          properties_id: number | null;
        };
        Insert: {
          id?: number;
          order?: number | null;
          parent_id: number;
          path: string;
          properties_id?: number | null;
        };
        Update: {
          id?: number;
          order?: number | null;
          parent_id?: number;
          path?: string;
          properties_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "pages_rels_parent_fk";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "pages_rels_properties_fk";
            columns: ["properties_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "pages_rels_properties_fk";
            columns: ["properties_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      payload_locked_documents: {
        Row: {
          created_at: string;
          global_slug: string | null;
          id: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          global_slug?: string | null;
          id?: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          global_slug?: string | null;
          id?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      payload_locked_documents_rels: {
        Row: {
          agents_id: number | null;
          id: number;
          media_id: number | null;
          order: number | null;
          pages_id: number | null;
          parent_id: number;
          path: string;
          properties_id: number | null;
          users_id: number | null;
        };
        Insert: {
          agents_id?: number | null;
          id?: number;
          media_id?: number | null;
          order?: number | null;
          pages_id?: number | null;
          parent_id: number;
          path: string;
          properties_id?: number | null;
          users_id?: number | null;
        };
        Update: {
          agents_id?: number | null;
          id?: number;
          media_id?: number | null;
          order?: number | null;
          pages_id?: number | null;
          parent_id?: number;
          path?: string;
          properties_id?: number | null;
          users_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "payload_locked_documents_rels_agents_fk";
            columns: ["agents_id"];
            isOneToOne: false;
            referencedRelation: "agents";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "payload_locked_documents_rels_media_fk";
            columns: ["media_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "payload_locked_documents_rels_pages_fk";
            columns: ["pages_id"];
            isOneToOne: false;
            referencedRelation: "pages";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "payload_locked_documents_rels_parent_fk";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "payload_locked_documents";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "payload_locked_documents_rels_properties_fk";
            columns: ["properties_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "payload_locked_documents_rels_properties_fk";
            columns: ["properties_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          },
          {
            foreignKeyName: "payload_locked_documents_rels_users_fk";
            columns: ["users_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      payload_migrations: {
        Row: {
          batch: number | null;
          created_at: string;
          id: number;
          name: string | null;
          updated_at: string;
        };
        Insert: {
          batch?: number | null;
          created_at?: string;
          id?: number;
          name?: string | null;
          updated_at?: string;
        };
        Update: {
          batch?: number | null;
          created_at?: string;
          id?: number;
          name?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      payload_preferences: {
        Row: {
          created_at: string;
          id: number;
          key: string | null;
          updated_at: string;
          value: Json | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          key?: string | null;
          updated_at?: string;
          value?: Json | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          key?: string | null;
          updated_at?: string;
          value?: Json | null;
        };
        Relationships: [];
      };
      payload_preferences_rels: {
        Row: {
          id: number;
          order: number | null;
          parent_id: number;
          path: string;
          users_id: number | null;
        };
        Insert: {
          id?: number;
          order?: number | null;
          parent_id: number;
          path: string;
          users_id?: number | null;
        };
        Update: {
          id?: number;
          order?: number | null;
          parent_id?: number;
          path?: string;
          users_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "payload_preferences_rels_parent_fk";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "payload_preferences";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "payload_preferences_rels_users_fk";
            columns: ["users_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      properties: {
        Row: {
          address: string | null;
          agent_id: number | null;
          area_1: string | null;
          area_2: string | null;
          country:
            | Database["public"]["Enums"]["enum_properties_country"]
            | null;
          created_at: string;
          currency:
            | Database["public"]["Enums"]["enum_properties_currency"]
            | null;
          id: number;
          image_id: number | null;
          keywords: string | null;
          lat: string | null;
          lng: string | null;
          ownership:
            | Database["public"]["Enums"]["enum_properties_ownership"]
            | null;
          post_code: string | null;
          price: number | null;
          sku: string | null;
          slug: string | null;
          state: Database["public"]["Enums"]["enum_properties_state"] | null;
          street_name: string | null;
          street_number: string | null;
          template:
            | Database["public"]["Enums"]["enum_properties_template"]
            | null;
          type: Database["public"]["Enums"]["enum_properties_type"] | null;
          updated_at: string;
          video: string | null;
        };
        Insert: {
          address?: string | null;
          agent_id?: number | null;
          area_1?: string | null;
          area_2?: string | null;
          country?:
            | Database["public"]["Enums"]["enum_properties_country"]
            | null;
          created_at?: string;
          currency?:
            | Database["public"]["Enums"]["enum_properties_currency"]
            | null;
          id?: number;
          image_id?: number | null;
          keywords?: string | null;
          lat?: string | null;
          lng?: string | null;
          ownership?:
            | Database["public"]["Enums"]["enum_properties_ownership"]
            | null;
          post_code?: string | null;
          price?: number | null;
          sku?: string | null;
          slug?: string | null;
          state?: Database["public"]["Enums"]["enum_properties_state"] | null;
          street_name?: string | null;
          street_number?: string | null;
          template?:
            | Database["public"]["Enums"]["enum_properties_template"]
            | null;
          type?: Database["public"]["Enums"]["enum_properties_type"] | null;
          updated_at?: string;
          video?: string | null;
        };
        Update: {
          address?: string | null;
          agent_id?: number | null;
          area_1?: string | null;
          area_2?: string | null;
          country?:
            | Database["public"]["Enums"]["enum_properties_country"]
            | null;
          created_at?: string;
          currency?:
            | Database["public"]["Enums"]["enum_properties_currency"]
            | null;
          id?: number;
          image_id?: number | null;
          keywords?: string | null;
          lat?: string | null;
          lng?: string | null;
          ownership?:
            | Database["public"]["Enums"]["enum_properties_ownership"]
            | null;
          post_code?: string | null;
          price?: number | null;
          sku?: string | null;
          slug?: string | null;
          state?: Database["public"]["Enums"]["enum_properties_state"] | null;
          street_name?: string | null;
          street_number?: string | null;
          template?:
            | Database["public"]["Enums"]["enum_properties_template"]
            | null;
          type?: Database["public"]["Enums"]["enum_properties_type"] | null;
          updated_at?: string;
          video?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_agent_id_agents_id_fk";
            columns: ["agent_id"];
            isOneToOne: false;
            referencedRelation: "agents";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_amenities: {
        Row: {
          _order: number;
          _parent_id: number;
          icon_id: number | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          icon_id?: number | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          icon_id?: number | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_amenities_icon_id_media_id_fk";
            columns: ["icon_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_amenities_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_amenities_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_amenities_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title:
            | Database["public"]["Enums"]["enum_properties_amenities_title"]
            | null;
          value: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title?:
            | Database["public"]["Enums"]["enum_properties_amenities_title"]
            | null;
          value?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?:
            | Database["public"]["Enums"]["enum_properties_amenities_title"]
            | null;
          value?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_amenities_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_amenities";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_contact_form: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          email_address: string | null;
          id: string;
          phone_number: string | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          email_address?: string | null;
          id: string;
          phone_number?: string | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          email_address?: string | null;
          id?: string;
          phone_number?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_contact_form_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_contact_form_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_contact_form_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_contact_form_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_contact_form";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_hero: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
          image_id: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
          image_id?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
          image_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_hero_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_hero_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_hero_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_hero_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          subtitle: string | null;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          subtitle?: string | null;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          subtitle?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_hero_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_hero";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_hero_search: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
          search_page_slug: string | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
          search_page_slug?: string | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
          search_page_slug?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_hero_search_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_hero_search_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_hero_search_images: {
        Row: {
          _order: number;
          _parent_id: string;
          file_id: number;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: string;
          file_id: number;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: string;
          file_id?: number;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_hero_search_images_file_id_media_id_fk";
            columns: ["file_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_hero_search_images_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_hero_search";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_hero_search_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          cta: string | null;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          cta?: string | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          cta?: string | null;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_hero_search_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_hero_search";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_links: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_links_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_links_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_links_items: {
        Row: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id: number | null;
          item_page_slug: string;
        };
        Insert: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id?: number | null;
          item_page_slug: string;
        };
        Update: {
          _order?: number;
          _parent_id?: string;
          id?: string;
          image_id?: number | null;
          item_page_slug?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_links_items_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_links_items_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_links";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_links_items_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          label: string;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          label: string;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          label?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_links_items_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_links_items";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_links_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_links_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_links";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_list: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          cta_page_slug: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          cta_page_slug?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          cta_page_slug?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_list_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_list_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_list_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          cta: string | null;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          cta?: string | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          cta?: string | null;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_list_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_list";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_map: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          address: string | null;
          block_name: string | null;
          id: string;
          lat: string;
          lng: string;
          name: string | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          address?: string | null;
          block_name?: string | null;
          id: string;
          lat: string;
          lng: string;
          name?: string | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          address?: string | null;
          block_name?: string | null;
          id?: string;
          lat?: string;
          lng?: string;
          name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_map_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_map_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_margin: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          background_color: string | null;
          block_name: string | null;
          id: string;
          margin_desktop: number | null;
          margin_mobile: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          background_color?: string | null;
          block_name?: string | null;
          id: string;
          margin_desktop?: number | null;
          margin_mobile?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          background_color?: string | null;
          block_name?: string | null;
          id?: string;
          margin_desktop?: number | null;
          margin_mobile?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_margin_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_margin_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_rich_text: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_rich_text_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_rich_text_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_rich_text_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          content: string | null;
          id: number;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          content?: string | null;
          id?: number;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          content?: string | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_rich_text_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_rich_text";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_search: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          filter_area: string | null;
          filter_price_end: number | null;
          filter_price_start: number | null;
          filter_sort:
            | Database["public"]["Enums"]["enum_properties_blocks_search_sort"]
            | null;
          filter_sub_area: string | null;
          id: string;
          image_id: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          filter_area?: string | null;
          filter_price_end?: number | null;
          filter_price_start?: number | null;
          filter_sort?:
            | Database["public"]["Enums"]["enum_properties_blocks_search_sort"]
            | null;
          filter_sub_area?: string | null;
          id: string;
          image_id?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          filter_area?: string | null;
          filter_price_end?: number | null;
          filter_price_start?: number | null;
          filter_sort?:
            | Database["public"]["Enums"]["enum_properties_blocks_search_sort"]
            | null;
          filter_sub_area?: string | null;
          id?: string;
          image_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_search_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_search_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_search_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_search_filter_ownerships: {
        Row: {
          id: number;
          order: number;
          parent_id: string;
          value:
            | Database["public"]["Enums"]["enum_properties_blocks_search_filter_ownerships"]
            | null;
        };
        Insert: {
          id?: number;
          order: number;
          parent_id: string;
          value?:
            | Database["public"]["Enums"]["enum_properties_blocks_search_filter_ownerships"]
            | null;
        };
        Update: {
          id?: number;
          order?: number;
          parent_id?: string;
          value?:
            | Database["public"]["Enums"]["enum_properties_blocks_search_filter_ownerships"]
            | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_search_filter_ownerships_parent_fk";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_search";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_search_filter_types: {
        Row: {
          id: number;
          order: number;
          parent_id: string;
          value:
            | Database["public"]["Enums"]["enum_properties_blocks_search_filter_types"]
            | null;
        };
        Insert: {
          id?: number;
          order: number;
          parent_id: string;
          value?:
            | Database["public"]["Enums"]["enum_properties_blocks_search_filter_types"]
            | null;
        };
        Update: {
          id?: number;
          order?: number;
          parent_id?: string;
          value?:
            | Database["public"]["Enums"]["enum_properties_blocks_search_filter_types"]
            | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_search_filter_types_parent_fk";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_search";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_search_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          subtitle: string | null;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          subtitle?: string | null;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          subtitle?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_search_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_search";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_section: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_section_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_section_c_t_a: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          cta_icon_id: number | null;
          cta_page_slug: string | null;
          id: string;
          image_id: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          cta_icon_id?: number | null;
          cta_page_slug?: string | null;
          id: string;
          image_id?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          cta_icon_id?: number | null;
          cta_page_slug?: string | null;
          id?: string;
          image_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_c_t_a_cta_icon_id_media_id_fk";
            columns: ["cta_icon_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_section_c_t_a_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_section_c_t_a_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_section_c_t_a_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_section_c_t_a_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          cta: string | null;
          description: string | null;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          cta?: string | null;
          description?: string | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          cta?: string | null;
          description?: string | null;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_c_t_a_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_section_c_t_a";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_section_items: {
        Row: {
          _order: number;
          _parent_id: string;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: string;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: string;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_items_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_section";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_section_items_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          label: string;
          text: string;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          label: string;
          text: string;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          label?: string;
          text?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_items_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_section_items";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_section_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          description: string | null;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          description?: string | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          description?: string | null;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_section";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_section_show_case: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_show_case_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_section_show_case_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_section_show_case_items: {
        Row: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: string;
          id?: string;
          image_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_show_case_items_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_section_show_case_items_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_section_show_case";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_section_show_case_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_show_case_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_section_show_case";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_section_slider: {
        Row: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          _path: string;
          block_name?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          _path?: string;
          block_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_slider_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_section_slider_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_blocks_section_slider_items: {
        Row: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id: number | null;
        };
        Insert: {
          _order: number;
          _parent_id: string;
          id: string;
          image_id?: number | null;
        };
        Update: {
          _order?: number;
          _parent_id?: string;
          id?: string;
          image_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_slider_items_image_id_media_id_fk";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_blocks_section_slider_items_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_section_slider";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_section_slider_items_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          content: string;
          id: number;
          name: string;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          content: string;
          id?: number;
          name: string;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          content?: string;
          id?: number;
          name?: string;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_slider_items_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_section_slider_items";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_blocks_section_slider_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_blocks_section_slider_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_blocks_section_slider";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_images: {
        Row: {
          _order: number;
          _parent_id: number;
          file_id: number;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          file_id: number;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          file_id?: number;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_images_file_id_media_id_fk";
            columns: ["file_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_images_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_images_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: number;
          description: string | null;
          descriptions: string | null;
          id: number;
          title: string;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: number;
          description?: string | null;
          descriptions?: string | null;
          id?: number;
          title: string;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: number;
          description?: string | null;
          descriptions?: string | null;
          id?: number;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_plans: {
        Row: {
          _order: number;
          _parent_id: number;
          icon_id: number | null;
          icon_placeholder: string | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          icon_id?: number | null;
          icon_placeholder?: string | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          icon_id?: number | null;
          icon_placeholder?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_plans_icon_id_media_id_fk";
            columns: ["icon_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_plans_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_plans_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_plans_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title:
            | Database["public"]["Enums"]["enum_properties_plans_title"]
            | null;
          value: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title?:
            | Database["public"]["Enums"]["enum_properties_plans_title"]
            | null;
          value?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?:
            | Database["public"]["Enums"]["enum_properties_plans_title"]
            | null;
          value?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_plans_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_plans";
            referencedColumns: ["id"];
          }
        ];
      };
      properties_rels: {
        Row: {
          id: number;
          order: number | null;
          parent_id: number;
          path: string;
          properties_id: number | null;
        };
        Insert: {
          id?: number;
          order?: number | null;
          parent_id: number;
          path: string;
          properties_id?: number | null;
        };
        Update: {
          id?: number;
          order?: number | null;
          parent_id?: number;
          path?: string;
          properties_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_rels_parent_fk";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_rels_parent_fk";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          },
          {
            foreignKeyName: "properties_rels_properties_fk";
            columns: ["properties_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_rels_properties_fk";
            columns: ["properties_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_spaces: {
        Row: {
          _order: number;
          _parent_id: number;
          icon_id: number | null;
          id: string;
        };
        Insert: {
          _order: number;
          _parent_id: number;
          icon_id?: number | null;
          id: string;
        };
        Update: {
          _order?: number;
          _parent_id?: number;
          icon_id?: number | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "properties_spaces_icon_id_media_id_fk";
            columns: ["icon_id"];
            isOneToOne: false;
            referencedRelation: "media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_spaces_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "properties_spaces_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_view_materialized";
            referencedColumns: ["property_id"];
          }
        ];
      };
      properties_spaces_locales: {
        Row: {
          _locale: unknown[];
          _parent_id: string;
          id: number;
          title:
            | Database["public"]["Enums"]["enum_properties_spaces_title"]
            | null;
          value: string | null;
        };
        Insert: {
          _locale: unknown[];
          _parent_id: string;
          id?: number;
          title?:
            | Database["public"]["Enums"]["enum_properties_spaces_title"]
            | null;
          value?: string | null;
        };
        Update: {
          _locale?: unknown[];
          _parent_id?: string;
          id?: number;
          title?:
            | Database["public"]["Enums"]["enum_properties_spaces_title"]
            | null;
          value?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_spaces_locales_parent_id_fk";
            columns: ["_parent_id"];
            isOneToOne: false;
            referencedRelation: "properties_spaces";
            referencedColumns: ["id"];
          }
        ];
      };
      users: {
        Row: {
          created_at: string;
          email: string;
          hash: string | null;
          id: number;
          lock_until: string | null;
          login_attempts: number | null;
          reset_password_expiration: string | null;
          reset_password_token: string | null;
          salt: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          hash?: string | null;
          id?: number;
          lock_until?: string | null;
          login_attempts?: number | null;
          reset_password_expiration?: string | null;
          reset_password_token?: string | null;
          salt?: string | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          hash?: string | null;
          id?: number;
          lock_until?: string | null;
          login_attempts?: number | null;
          reset_password_expiration?: string | null;
          reset_password_token?: string | null;
          salt?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      properties_view_materialized: {
        Row: {
          image_ids: string[] | null;
          media_alts: string[] | null;
          media_ids: number[] | null;
          media_urls: string[] | null;
          plan_ids: string[] | null;
          plan_locale_titles:
            | Database["public"]["Enums"]["enum_properties_plans_title"][]
            | null;
          plan_locale_value: string[] | null;
          property_address: string | null;
          property_agent_id: number | null;
          property_area_1: string | null;
          property_area_2: string | null;
          property_country:
            | Database["public"]["Enums"]["enum_properties_country"]
            | null;
          property_created_at: string | null;
          property_currency:
            | Database["public"]["Enums"]["enum_properties_currency"]
            | null;
          property_id: number | null;
          property_ownership:
            | Database["public"]["Enums"]["enum_properties_ownership"]
            | null;
          property_post_code: string | null;
          property_price: number | null;
          property_sku: string | null;
          property_slug: string | null;
          property_state:
            | Database["public"]["Enums"]["enum_properties_state"]
            | null;
          property_street_name: string | null;
          property_street_number: string | null;
          property_type:
            | Database["public"]["Enums"]["enum_properties_type"]
            | null;
          property_updated_at: string | null;
          property_video: string | null;
          space_ids: string[] | null;
          space_locale_titles:
            | Database["public"]["Enums"]["enum_properties_spaces_title"][]
            | null;
          space_locale_value: string[] | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_agent_id_agents_id_fk";
            columns: ["property_agent_id"];
            isOneToOne: false;
            referencedRelation: "agents";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      properties_view_materialized: {
        Row: {
          image_ids: string[] | null;
          media_alts: string[] | null;
          media_ids: number[] | null;
          media_urls: string[] | null;
          plan_ids: string[] | null;
          plan_locale_titles:
            | Database["public"]["Enums"]["enum_properties_plans_title"][]
            | null;
          plan_locale_value: string[] | null;
          property_address: string | null;
          property_agent_id: number | null;
          property_area_1: string | null;
          property_area_2: string | null;
          property_country:
            | Database["public"]["Enums"]["enum_properties_country"]
            | null;
          property_created_at: string | null;
          property_currency:
            | Database["public"]["Enums"]["enum_properties_currency"]
            | null;
          property_id: number | null;
          property_ownership:
            | Database["public"]["Enums"]["enum_properties_ownership"]
            | null;
          property_post_code: string | null;
          property_price: number | null;
          property_sku: string | null;
          property_slug: string | null;
          property_state:
            | Database["public"]["Enums"]["enum_properties_state"]
            | null;
          property_street_name: string | null;
          property_street_number: string | null;
          property_type:
            | Database["public"]["Enums"]["enum_properties_type"]
            | null;
          property_updated_at: string | null;
          property_video: string | null;
          space_ids: string[] | null;
          space_locale_titles:
            | Database["public"]["Enums"]["enum_properties_spaces_title"][]
            | null;
          space_locale_value: string[] | null;
        };
        Relationships: [
          {
            foreignKeyName: "properties_agent_id_agents_id_fk";
            columns: ["property_agent_id"];
            isOneToOne: false;
            referencedRelation: "agents";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      _locales: "en" | "id" | "fr";
      enum_pages_blocks_search_filter_area:
        | "BADUNG AREA"
        | "BUKIT AREA"
        | "CANGGU AREA"
        | "DENPASAR"
        | "EAST JAVA"
        | "FLORES"
        | "GIANYAR"
        | "JAKARTA"
        | "JEMBRANA AREA"
        | "Kintamani"
        | "LOMBOK"
        | "MENGWI"
        | "NORTH BALI AREA"
        | "NUSA DUA"
        | "NUSA LEMBONGAN / CENINGAN / PENIDA"
        | "OTHERS"
        | "ROTE ISLAND"
        | "SANUR AND EAST COAST AREA"
        | "SEMINYAK AREA"
        | "SUMBA"
        | "SUMBAWA"
        | "TABANAN AREA"
        | "UBUD AREA"
        | "UMALAS AND KEROBOKAN AREA"
        | "WEST JAVA"
        | "WEST SUMATERA";
      enum_pages_blocks_search_filter_locations_area:
        | "BADUNG AREA"
        | "BUKIT AREA"
        | "CANGGU AREA"
        | "DENPASAR"
        | "EAST JAVA"
        | "FLORES"
        | "GIANYAR"
        | "JAKARTA"
        | "JEMBRANA AREA"
        | "Kintamani"
        | "LOMBOK"
        | "MENGWI"
        | "NORTH BALI AREA"
        | "NUSA DUA"
        | "NUSA LEMBONGAN / CENINGAN / PENIDA"
        | "OTHERS"
        | "ROTE ISLAND"
        | "SANUR AND EAST COAST AREA"
        | "SEMINYAK AREA"
        | "SUMBA"
        | "SUMBAWA"
        | "TABANAN AREA"
        | "UBUD AREA"
        | "UMALAS AND KEROBOKAN AREA"
        | "WEST JAVA"
        | "WEST SUMATERA";
      enum_pages_blocks_search_filter_ownerships:
        | "Rental"
        | "Freehold"
        | "Leasehold";
      enum_pages_blocks_search_filter_sort:
        | "createdAt"
        | "-createdAt"
        | "price"
        | "-price";
      enum_pages_blocks_search_filter_sub_area:
        | "Buduk"
        | "Jimbaran"
        | "Pecatu"
        | "South Bukit"
        | "West Bukit"
        | "Ungasan"
        | "Babakan"
        | "Berawa"
        | "Batu Bolong / Echo Beach"
        | "Bumbak"
        | "Kayu Tulang"
        | "Padonan"
        | "Pantain Lima"
        | "Pererenan"
        | "Seseh"
        | "Tumbak Bayuh"
        | "Tiying Tutul"
        | "Tibubeneng"
        | "Watukaru"
        | "Watukarung"
        | "Medewi"
        | "Negara"
        | "Gili Islands"
        | "GILI TRAWANGAN"
        | "Kuta Area"
        | "Mandalika"
        | "Senggigi Area"
        | "Cemagi"
        | "Buleleng"
        | "Lovina"
        | "Singaraja"
        | "Amed / Tulamben"
        | "Candidasa"
        | "Keramas"
        | "Ketewel"
        | "Medahan"
        | "Sanur"
        | "Batu Belig"
        | "Kuta"
        | "KUTA"
        | "Legian"
        | "Petitenget"
        | "Seminyak"
        | "Balian"
        | "Kaba - Kaba"
        | "Kedungu"
        | "Nyanyi"
        | "Mas"
        | "Payangan"
        | "Tagallalang"
        | "Banjar Semer"
        | "Kerobokan"
        | "Tegal Cupek"
        | "Umalas"
        | "Mentawai";
      enum_pages_blocks_search_filter_types:
        | "Land"
        | "Villa Rental"
        | "Villa / House / Apartment"
        | "Hotel, Resort, Villa Complex"
        | "Commercial Space";
      enum_pages_blocks_search_properties_filter_ownership:
        | "Rental"
        | "Freehold"
        | "Leasehold";
      enum_pages_blocks_search_properties_filter_type:
        | "Land"
        | "Villa Rental"
        | "Villa / House / Apartment"
        | "Hotel, Resort, Villa Complex"
        | "Commercial Space";
      enum_pages_blocks_search_sort:
        | "createdAt"
        | "-createdAt"
        | "price"
        | "-price";
      enum_pages_currency: "IDR" | "USD";
      enum_pages_template:
        | "default"
        | "home"
        | "about"
        | "contact"
        | "Default"
        | "Home"
        | "About"
        | "Contact";
      enum_properties_amenities_title:
        | "City Center View"
        | "Commercial Zoning"
        | "Fully Furnished"
        | "Kitchen"
        | "Living Area"
        | "Modern Minimalist"
        | "Residential Zoning"
        | "Swimming Pool"
        | "Water"
        | "Architecture"
        | "Dryer Machine & washing machine"
        | "Garden"
        | "Guest Toilet"
        | "Gym"
        | "Laundry Space"
        | "Outdoor Terrace and Bar"
        | "Pantry"
        | "Parking"
        | "River Front View"
        | "Security"
        | "Smart Tv"
        | "Staff Room"
        | "Terrace"
        | "Wifi"
        | "Parking Area"
        | "Pondok Wisata Zoning"
        | "Rental license"
        | "Surf Spot"
        | "Beachside"
        | "Internet"
        | "Spa"
        | "Beachfront View"
        | "Cliff Front View"
        | "Ocean View"
        | "Garage"
        | "Tropical Architecture"
        | "TV Cable"
        | "Jungle View"
        | "Partly Furnished"
        | "Rice Field View"
        | "Unfurnished"
        | "Mediterranean"
        | "Mountains View"
        | "Rooftop"
        | "Koi Ponds"
        | "Village"
        | "VIP Room"
        | "Wedding Area"
        | "Solar Panels"
        | "Tourism Zoning"
        | "CCTV"
        | "Powder Room"
        | "Water filter"
        | "Wet kitchen"
        | "Water Supply"
        | "Rooftop Gazebo"
        | "Fiber Optic Internet"
        | "lobby"
        | "Android TV"
        | "splitable"
        | "Traditional Joglo"
        | "Banquet Area"
        | "Additional"
        | "Reversed osmosis filtered water"
        | "Solar power heating water"
        | "Water softener"
        | "Zoning"
        | "Furniture";
      enum_properties_area_1:
        | "TABANAN AREA"
        | "CANGGU AREA"
        | "NORTH BALI AREA"
        | "UMALAS AND KEROBOKAN AREA"
        | "BUKIT AREA"
        | "SANUR AND EAST COAST AREA"
        | "ROTE ISLAND"
        | "SEMINYAK AREA"
        | "DENPASAR"
        | "UBUD AREA"
        | "MENGWI"
        | "SUMBAWA"
        | "NUSA LEMBONGAN / CENINGAN / PENIDA"
        | "LOMBOK"
        | "BADUNG AREA"
        | "SUMBA"
        | "WEST SUMATERA"
        | "FLORES"
        | "EAST JAVA"
        | "Kintamani"
        | "GIANYAR"
        | "NUSA DUA"
        | "JEMBRANA AREA"
        | "WEST JAVA"
        | "OTHERS";
      enum_properties_area_2:
        | "Kedungu"
        | "Berawa"
        | "Buleleng"
        | "Umalas"
        | "Tegal Cupek"
        | "Sanur"
        | "Seminyak"
        | "Jimbaran"
        | "Cemagi"
        | "Pecatu"
        | "Pererenan"
        | "Mas"
        | "Keramas"
        | "Nyanyi"
        | "Tibubeneng"
        | "Tumbak Bayuh"
        | "Batu Bolong / Echo Beach"
        | "Payangan"
        | "Gili Islands"
        | "Buduk"
        | "Petitenget"
        | "Mentawai"
        | "GILI TRAWANGAN"
        | "Kerobokan"
        | "Ketewel"
        | "South Bukit"
        | "Padonan"
        | "Tegallalang"
        | "Others"
        | "Amed / Tulamben"
        | "Seseh"
        | "Ungasan"
        | "Kuta"
        | "Kayu Tulang"
        | "Legian"
        | "Mandalika"
        | "Kaba - Kaba"
        | "Batu Belig"
        | "Pantai Lima"
        | "Babakan"
        | "Balian"
        | "Tying Tutul"
        | "Kuta Area"
        | "Medewi"
        | "Singaraja"
        | "Senggigi Area";
      enum_properties_blocks_search_filter_area:
        | "BADUNG AREA"
        | "BUKIT AREA"
        | "CANGGU AREA"
        | "DENPASAR"
        | "EAST JAVA"
        | "FLORES"
        | "GIANYAR"
        | "JAKARTA"
        | "JEMBRANA AREA"
        | "Kintamani"
        | "LOMBOK"
        | "MENGWI"
        | "NORTH BALI AREA"
        | "NUSA DUA"
        | "NUSA LEMBONGAN / CENINGAN / PENIDA"
        | "OTHERS"
        | "ROTE ISLAND"
        | "SANUR AND EAST COAST AREA"
        | "SEMINYAK AREA"
        | "SUMBA"
        | "SUMBAWA"
        | "TABANAN AREA"
        | "UBUD AREA"
        | "UMALAS AND KEROBOKAN AREA"
        | "WEST JAVA"
        | "WEST SUMATERA";
      enum_properties_blocks_search_filter_locations_area:
        | "BADUNG AREA"
        | "BUKIT AREA"
        | "CANGGU AREA"
        | "DENPASAR"
        | "EAST JAVA"
        | "FLORES"
        | "GIANYAR"
        | "JAKARTA"
        | "JEMBRANA AREA"
        | "Kintamani"
        | "LOMBOK"
        | "MENGWI"
        | "NORTH BALI AREA"
        | "NUSA DUA"
        | "NUSA LEMBONGAN / CENINGAN / PENIDA"
        | "OTHERS"
        | "ROTE ISLAND"
        | "SANUR AND EAST COAST AREA"
        | "SEMINYAK AREA"
        | "SUMBA"
        | "SUMBAWA"
        | "TABANAN AREA"
        | "UBUD AREA"
        | "UMALAS AND KEROBOKAN AREA"
        | "WEST JAVA"
        | "WEST SUMATERA";
      enum_properties_blocks_search_filter_ownerships:
        | "Rental"
        | "Freehold"
        | "Leasehold";
      enum_properties_blocks_search_filter_sort:
        | "createdAt"
        | "-createdAt"
        | "price"
        | "-price";
      enum_properties_blocks_search_filter_sub_area:
        | "Buduk"
        | "Jimbaran"
        | "Pecatu"
        | "South Bukit"
        | "West Bukit"
        | "Ungasan"
        | "Babakan"
        | "Berawa"
        | "Batu Bolong / Echo Beach"
        | "Bumbak"
        | "Kayu Tulang"
        | "Padonan"
        | "Pantain Lima"
        | "Pererenan"
        | "Seseh"
        | "Tumbak Bayuh"
        | "Tiying Tutul"
        | "Tibubeneng"
        | "Watukaru"
        | "Watukarung"
        | "Medewi"
        | "Negara"
        | "Gili Islands"
        | "GILI TRAWANGAN"
        | "Kuta Area"
        | "Mandalika"
        | "Senggigi Area"
        | "Cemagi"
        | "Buleleng"
        | "Lovina"
        | "Singaraja"
        | "Amed / Tulamben"
        | "Candidasa"
        | "Keramas"
        | "Ketewel"
        | "Medahan"
        | "Sanur"
        | "Batu Belig"
        | "Kuta"
        | "KUTA"
        | "Legian"
        | "Petitenget"
        | "Seminyak"
        | "Balian"
        | "Kaba - Kaba"
        | "Kedungu"
        | "Nyanyi"
        | "Mas"
        | "Payangan"
        | "Tagallalang"
        | "Banjar Semer"
        | "Kerobokan"
        | "Tegal Cupek"
        | "Umalas"
        | "Mentawai";
      enum_properties_blocks_search_filter_types:
        | "Land"
        | "Villa Rental"
        | "Villa / House / Apartment"
        | "Hotel, Resort, Villa Complex"
        | "Commercial Space";
      enum_properties_blocks_search_properties_filter_ownership:
        | "Rental"
        | "Freehold"
        | "Leasehold";
      enum_properties_blocks_search_properties_filter_type:
        | "Land"
        | "Villa Rental"
        | "Villa / House / Apartment"
        | "Hotel, Resort, Villa Complex"
        | "Commercial Space";
      enum_properties_blocks_search_sort:
        | "createdAt"
        | "-createdAt"
        | "price"
        | "-price";
      enum_properties_country: "Indonesia";
      enum_properties_currency: "IDR" | "USD";
      enum_properties_ownership: "Rental" | "Freehold" | "Leasehold";
      enum_properties_plans_title:
        | "Area (M 2)"
        | "Bedrooms"
        | "Bathrooms"
        | "Garages"
        | "Rooms";
      enum_properties_spaces_title:
        | "Land Size"
        | "Price/are/year"
        | "Leasehold valid until"
        | "Year Built"
        | "Price per m2"
        | "Lease until "
        | "Electricity"
        | "Title"
        | "Year of renovation "
        | "Road Access"
        | "Leasehold Valid Until"
        | "Swimming Pool "
        | "Electricity "
        | "Road Access "
        | "Leasehold Valid Until "
        | "Price / Are / Year"
        | "Title "
        | "Renovated "
        | "Leasehold valid until "
        | "Price / Are "
        | "Villa Unit"
        | "Price / Year / Unit"
        | "Leasehold"
        | "Price / Are/ Year"
        | "Swimming Pool"
        | "Leasedhold Valid until "
        | "Price/are"
        | "Price / Are"
        | "Price / Are / Years"
        | "Price/Are/Year"
        | "Leasehold "
        | "Beach frontage "
        | "Mainroad frontage"
        | "PRICE / ARE "
        | "ROAD ACCESS"
        | "PRICE / ARE"
        | "Sauna for "
        | "Architecture"
        | "LEASEHOLD VALID UNTIL "
        | "BUILDING SIZE"
        | "Price / m2"
        | "TITLE STATUS "
        | "LEASEHOLD VALID UNTIL"
        | "ELECTRICITY"
        | "BUILDING SIZE "
        | "ELECTRICITY "
        | "SWIMMING POOL "
        | "PRICE/ARE"
        | "SWIMMING POOL"
        | "Available On"
        | "PRICE/ARE/YEAR"
        | "Building Size"
        | "Price/Are"
        | "Building Size "
        | "Garden"
        | "TITLE STATUS"
        | "Price /are "
        | "Leasehold until"
        | "Price / are / year"
        | "Open for leasehold "
        | "Price / year"
        | "Price/ are"
        | "Price / are "
        | "Price / are"
        | "Price / are / year "
        | "Extension "
        | "Car park"
        | "lease valid until "
        | "Available on "
        | "Swimmimg Pool"
        | "Available on"
        | "ELectricity"
        | "swimming pool"
        | "Swimming pool"
        | "RENTED"
        | "Staffs"
        | "No"
        | "Available after"
        | "IDR"
        | "Measurement"
        | "Leasehold until "
        | "Available for Monthly Rental"
        | "Available for yearly rental"
        | "3 and 5 years "
        | "20 years"
        | "Elecricity"
        | "The construction will be completed by "
        | "Swimming pool "
        | "Construction starting "
        | "Available for monthly rental"
        | "This villa will be available and completion "
        | "Available for"
        | "Price per are "
        | "Price per are (per year)"
        | "Available "
        | "Available for leasehold "
        | "Available for Freehold"
        | "View"
        | "Leasehold Valid until"
        | "Selling price of "
        | "Price/are "
        | "Living Area "
        | "Rented until"
        | "Leasehold valid for"
        | "Valid until"
        | "Swimming Pool Size"
        | "Price/year"
        | "Complex of"
        | "Renovated"
        | "Unit Available"
        | "Internet"
        | "Leasehold for"
        | "Swimming pool size"
        | "LEASEHOLD UNTIL"
        | "PLN"
        | "Restaurant Size"
        | "Staff Building Size"
        | "Bar"
        | "Reception hall"
        | "Villa 2 Bedrooms"
        | "Bungalows"
        | "Free to Build"
        | "Swimming Pool size"
        | "Parking size"
        | "Unit"
        | "Access "
        | "Leaehold valid until"
        | "Available for "
        | "Booked until "
        | "Price/m2"
        | "PRICE PER M2"
        | "Swimming Pool Size "
        | "Swimming pool size "
        | "Leasehold valid"
        | "Lease valid until"
        | "LEASE UNTIL"
        | "OPTION TO EXTEND"
        | "PRICE / M2 / YEAR"
        | "Long lease valid until "
        | "Title Status"
        | "Monthly "
        | "Yearly"
        | "Lesehold until"
        | "LEASEHOLD "
        | "FREEHOLD LAND"
        | "LEASEHOLD LAND 1"
        | "LEASEHOLD LAND 2 "
        | "LICENSE"
        | "PRICE PER ARE"
        | "Price per Are"
        | "BEACH FRONTAGE"
        | "SWIMMING POOL SIZE"
        | "Water"
        | "LEASEHOLD UNTIL "
        | "Price per m2 "
        | "Surf spot "
        | "Land shape"
        | "EXPIRATION DATE "
        | "LEASE EXPIRATION DATE"
        | "Price / m2 "
        | "Lease ends "
        | "Floor"
        | "Access"
        | "Ownership Type"
        | "Electricity Capacity"
        | "Price per Are ";
      enum_properties_state:
        | "Bali"
        | "East Nusa Tenggara"
        | "Nusa Tenggara Barat"
        | "West Sumatra"
        | "West Nusa Tenggara"
        | "East Java"
        | "Nusa Tenggara Timur"
        | "West Java";
      enum_properties_template:
        | "default"
        | "single"
        | "collection"
        | "home"
        | "about"
        | "contact"
        | "search"
        | "Default"
        | "Collection"
        | "Search";
      enum_properties_type:
        | "Land"
        | "Villa Rental"
        | "Villa / House / Apartment"
        | "Hotel, Resort, Villa Complex"
        | "Commercial Space";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
