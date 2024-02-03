var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var Scratch = Scratch || {};
Scratch.Gallery = Scratch.Gallery || {};

Scratch.Gallery.Router = Backbone.Router.extend({
  routes: {
      ""                : "load",
      "comments-*id"    : "comments",
  },

  initialize: function() {
    var self = this; 
    /* Global gallery stuff */
    // TODO: remove this, it's only being used in editable fields, adjust editable fields so they don't require it
    this.galleryModel = new Scratch.GalleryThumbnail(Scratch.INIT_DATA.GALLERY.model);
    $('#description.read-only').verticalTinyScrollbar();

    this.galleryFollowButton = new Scratch.Gallery.FollowButton({el: '#follow-button', gallery_id: Scratch.INIT_DATA.GALLERY.model.id, displayName: Scratch.INIT_DATA.GALLERY.model.title });
    this.galleryEditTitle = new Scratch.Gallery.EditableField({gallery_id: Scratch.INIT_DATA.GALLERY.model.id, el: '#title'});
    this.galleryEditDescription = new Scratch.Gallery.EditableField({gallery_id: Scratch.INIT_DATA.GALLERY.model.id, el: '#description'});
    this.galleryCoverImage = new Scratch.EditableImage({model: this.galleryModel, el: '#gallery-cover-image'});
    if (Scratch.INIT_DATA.ADMIN) {
      this.adminView = new Scratch.AdminPanel({model: this.galleryModel, el: $('#admin-panel')});
    }

    this.galleryReport = new Scratch.Gallery.Report({model: this.galleryModel});

    $('li[data-tab="projects"].active').each(function() {
      self.initializeProjects();
    });
    $('li[data-tab="comments"].active').each(function() {
      self.initializeComments();
    });
    $('li[data-tab="curators"].active').each(function() {
      self.initializeCurators();
    });
  },

  initializeProjects: function() {
    // infinite scroll
    $(window).scroll(Scratch.Gallery.pageScroll);
    Scratch.Gallery.nextPage(); // get first page of projects

    /* Local to project page */
    $('#open-gallery input').on('click', function(e) {Scratch.Gallery.markAsOpen(e, Scratch.INIT_DATA.GALLERY.model.id);});

    /* NOTE: don't place anything new below here, there is a backbone error caused by an older verison of backbone.js that prevents anything else from running */
    this.projectDialog = new Scratch.Gallery.AddProjectBy({el: $('#project-action-bar'), gallery_id: Scratch.INIT_DATA.GALLERY.model.id});
    this.projectList = new Scratch.Gallery.ProjectList({el: $('.media-grid.projects'), gallery_id: Scratch.INIT_DATA.GALLERY.model.id});
    this.addProjectsFromList = new Scratch.Gallery.AddProjectsFromList({el: $('#explore-bar'), gallery_id: Scratch.INIT_DATA.GALLERY.model.id, add_to_el: $('.media-grid.projects')});
    this.addToGallery = new Scratch.Gallery.AddToGalleryBar({el: $('#explore-bar')});
  },

  initializeComments: function() {
    $('#disable-notifications input').on('click', function(e) {Scratch.Gallery.disableNotifications(e, Scratch.INIT_DATA.GALLERY.model.id);});
  },

  initializeCurators: function() {
    Scratch.Gallery.DEFAULT_NEXT_PAGE_SELECTOR = "#curator-content";
    Scratch.Gallery.nextPage('#owner-content', $('#owner-loader'));
    Scratch.Gallery.nextPage('#curator-content');
    $(window).scroll(Scratch.Gallery.pageScroll);

    this.ownerLoadButton = new Scratch.Gallery.LoadButton({el: '#owner-loader'});

    /* NOTE: don't place anything new below here, there is a backbone error caused by an older verison of backbone.js that prevents anything else from running */
    this.curatorList = new Scratch.Gallery.CuratorList({el: $('#curator-content'), gallery_id: Scratch.INIT_DATA.GALLERY.model.id});
    this.ownerList = new Scratch.Gallery.CuratorList({el: $('#owner-content'), gallery_id: Scratch.INIT_DATA.GALLERY.model.id});
    this.addToGallery = new Scratch.Gallery.AddToGalleryBar({el: $('#explore-bar')});
    this.curatorDialog = new Scratch.Gallery.AddCuratorBy({el: $('#curator-action-bar'), gallery_id: Scratch.INIT_DATA.GALLERY.model.id});
    this.addCuratorsFromList = new Scratch.Gallery.AddCuratorsFromList({el: $('#explore-bar'), gallery_id: Scratch.INIT_DATA.GALLERY.model.id, add_to_el: $('.media-grid.curators')});
    if ($('#curator-invite').length) {
      this.invite = new Scratch.Gallery.AcceptCuratorInvite({ el: $('#curator-invite'), gallery_id: Scratch.INIT_DATA.GALLERY.model.id});
    }
  },

  load: function() {
    var self = this;
    $('li[data-tab="comments"].active').each(function() {
      self.comments();
    });
  },

  comments: function(id) {
    if (id) {
      var commentView = new Scratch.Comments({el: $('#comments'), scrollTo: '-' + id, type: 'gallery', typeId: Scratch.INIT_DATA.GALLERY.model.id});
    } else {
      var commentView = new Scratch.Comments({el: $('#comments'), type: 'gallery', typeId: Scratch.INIT_DATA.GALLERY.model.id});
    }
  }
});

$(function() {
  app = new Scratch.Gallery.Router();
  Backbone.history.start();
});


}
/*
     FILE ARCHIVED ON 07:14:28 Apr 28, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:27:33 Feb 03, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.098
  exclusion.robots.policy: 0.084
  cdx.remote: 0.131
  esindex: 0.013
  LoadShardBlock: 283.747 (6)
  PetaboxLoader3.datanode: 185.758 (8)
  PetaboxLoader3.resolve: 127.157 (2)
  load_resource: 163.541 (2)
*/