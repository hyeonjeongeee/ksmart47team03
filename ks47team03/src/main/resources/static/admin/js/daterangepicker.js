!(function (t, a) {
  var e, i;
  "function" == typeof define && define.amd
    ? define(["moment", "jquery"], function (t, e) {
        return (
          e.fn || (e.fn = {}),
          "function" != typeof t &&
            t.hasOwnProperty("default") &&
            (t = t.default),
          a(t, e)
        );
      })
    : "object" == typeof module && module.exports
    ? ((e = "undefined" != typeof window ? window.jQuery : void 0) ||
        (e = require("jquery")).fn ||
        (e.fn = {}),
      (i =
        "undefined" != typeof window && void 0 !== window.moment
          ? window.moment
          : require("moment")),
      (module.exports = a(i, e)))
    : (t.daterangepicker = a(t.moment, t.jQuery));
})(this, function (j, R) {
  function i(t, e, a) {
    var i, s, n, r, o;
    if (
      ((this.parentEl = "body"),
      (this.element = R(t)),
      (this.startDate = j().startOf("day")),
      (this.endDate = j().endOf("day")),
      (this.minDate = !1),
      (this.maxDate = !1),
      (this.maxSpan = !1),
      (this.autoApply = !1),
      (this.singleDatePicker = !1),
      (this.showDropdowns = !1),
      (this.minYear = j().subtract(100, "year").format("YYYY")),
      (this.maxYear = j().add(100, "year").format("YYYY")),
      (this.showWeekNumbers = !1),
      (this.showISOWeekNumbers = !1),
      (this.showCustomRangeLabel = !0),
      (this.timePicker = !1),
      (this.timePicker24Hour = !1),
      (this.timePickerIncrement = 1),
      (this.timePickerSeconds = !1),
      (this.linkedCalendars = !0),
      (this.autoUpdateInput = !0),
      (this.alwaysShowCalendars = !1),
      (this.ranges = {}),
      (this.opens = "right"),
      this.element.hasClass("pull-right") && (this.opens = "left"),
      (this.drops = "down"),
      this.element.hasClass("dropup") && (this.drops = "up"),
      (this.buttonClasses = "btn btn-sm"),
      (this.applyButtonClasses = "btn-primary"),
      (this.cancelButtonClasses = "btn-default"),
      (this.locale = {
        direction: "ltr",
        format: j.localeData().longDateFormat("L"),
        separator: " - ",
        applyLabel: "Apply",
        cancelLabel: "Cancel",
        weekLabel: "W",
        customRangeLabel: "Custom Range",
        daysOfWeek: j.weekdaysMin(),
        monthNames: j.monthsShort(),
        firstDay: j.localeData().firstDayOfWeek(),
      }),
      (this.callback = function () {}),
      (this.isShowing = !1),
      (this.leftCalendar = {}),
      (this.rightCalendar = {}),
      ("object" == typeof e && null !== e) || (e = {}),
      "string" == typeof (e = R.extend(this.element.data(), e)).template ||
        e.template instanceof R ||
        (e.template =
          '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'),
      (this.parentEl =
        e.parentEl && R(e.parentEl).length ? R(e.parentEl) : R(this.parentEl)),
      (this.container = R(e.template).appendTo(this.parentEl)),
      "object" == typeof e.locale &&
        ("string" == typeof e.locale.direction &&
          (this.locale.direction = e.locale.direction),
        "string" == typeof e.locale.format &&
          (this.locale.format = e.locale.format),
        "string" == typeof e.locale.separator &&
          (this.locale.separator = e.locale.separator),
        "object" == typeof e.locale.daysOfWeek &&
          (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()),
        "object" == typeof e.locale.monthNames &&
          (this.locale.monthNames = e.locale.monthNames.slice()),
        "number" == typeof e.locale.firstDay &&
          (this.locale.firstDay = e.locale.firstDay),
        "string" == typeof e.locale.applyLabel &&
          (this.locale.applyLabel = e.locale.applyLabel),
        "string" == typeof e.locale.cancelLabel &&
          (this.locale.cancelLabel = e.locale.cancelLabel),
        "string" == typeof e.locale.weekLabel &&
          (this.locale.weekLabel = e.locale.weekLabel),
        "string" == typeof e.locale.customRangeLabel &&
          (((l = document.createElement("textarea")).innerHTML =
            e.locale.customRangeLabel),
          (c = l.value),
          (this.locale.customRangeLabel = c))),
      this.container.addClass(this.locale.direction),
      "string" == typeof e.startDate &&
        (this.startDate = j(e.startDate, this.locale.format)),
      "string" == typeof e.endDate &&
        (this.endDate = j(e.endDate, this.locale.format)),
      "string" == typeof e.minDate &&
        (this.minDate = j(e.minDate, this.locale.format)),
      "string" == typeof e.maxDate &&
        (this.maxDate = j(e.maxDate, this.locale.format)),
      "object" == typeof e.startDate && (this.startDate = j(e.startDate)),
      "object" == typeof e.endDate && (this.endDate = j(e.endDate)),
      "object" == typeof e.minDate && (this.minDate = j(e.minDate)),
      "object" == typeof e.maxDate && (this.maxDate = j(e.maxDate)),
      this.minDate &&
        this.startDate.isBefore(this.minDate) &&
        (this.startDate = this.minDate.clone()),
      this.maxDate &&
        this.endDate.isAfter(this.maxDate) &&
        (this.endDate = this.maxDate.clone()),
      "string" == typeof e.applyButtonClasses &&
        (this.applyButtonClasses = e.applyButtonClasses),
      "string" == typeof e.applyClass &&
        (this.applyButtonClasses = e.applyClass),
      "string" == typeof e.cancelButtonClasses &&
        (this.cancelButtonClasses = e.cancelButtonClasses),
      "string" == typeof e.cancelClass &&
        (this.cancelButtonClasses = e.cancelClass),
      "object" == typeof e.maxSpan && (this.maxSpan = e.maxSpan),
      "object" == typeof e.dateLimit && (this.maxSpan = e.dateLimit),
      "string" == typeof e.opens && (this.opens = e.opens),
      "string" == typeof e.drops && (this.drops = e.drops),
      "boolean" == typeof e.showWeekNumbers &&
        (this.showWeekNumbers = e.showWeekNumbers),
      "boolean" == typeof e.showISOWeekNumbers &&
        (this.showISOWeekNumbers = e.showISOWeekNumbers),
      "string" == typeof e.buttonClasses &&
        (this.buttonClasses = e.buttonClasses),
      "object" == typeof e.buttonClasses &&
        (this.buttonClasses = e.buttonClasses.join(" ")),
      "boolean" == typeof e.showDropdowns &&
        (this.showDropdowns = e.showDropdowns),
      "number" == typeof e.minYear && (this.minYear = e.minYear),
      "number" == typeof e.maxYear && (this.maxYear = e.maxYear),
      "boolean" == typeof e.showCustomRangeLabel &&
        (this.showCustomRangeLabel = e.showCustomRangeLabel),
      "boolean" == typeof e.singleDatePicker &&
        ((this.singleDatePicker = e.singleDatePicker),
        this.singleDatePicker && (this.endDate = this.startDate.clone())),
      "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker),
      "boolean" == typeof e.timePickerSeconds &&
        (this.timePickerSeconds = e.timePickerSeconds),
      "number" == typeof e.timePickerIncrement &&
        (this.timePickerIncrement = e.timePickerIncrement),
      "boolean" == typeof e.timePicker24Hour &&
        (this.timePicker24Hour = e.timePicker24Hour),
      "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply),
      "boolean" == typeof e.autoUpdateInput &&
        (this.autoUpdateInput = e.autoUpdateInput),
      "boolean" == typeof e.linkedCalendars &&
        (this.linkedCalendars = e.linkedCalendars),
      "function" == typeof e.isInvalidDate &&
        (this.isInvalidDate = e.isInvalidDate),
      "function" == typeof e.isCustomDate &&
        (this.isCustomDate = e.isCustomDate),
      "boolean" == typeof e.alwaysShowCalendars &&
        (this.alwaysShowCalendars = e.alwaysShowCalendars),
      0 != this.locale.firstDay)
    )
      for (var h = this.locale.firstDay; 0 < h; )
        this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), h--;
    if (
      (void 0 === e.startDate &&
        void 0 === e.endDate &&
        R(this.element).is(":text") &&
        ((o = i = null),
        2 ==
        (r = (n = R(this.element).val()).split(this.locale.separator)).length
          ? ((o = j(r[0], this.locale.format)),
            (i = j(r[1], this.locale.format)))
          : this.singleDatePicker &&
            "" !== n &&
            ((o = j(n, this.locale.format)), (i = j(n, this.locale.format))),
        null !== o && null !== i && (this.setStartDate(o), this.setEndDate(i))),
      "object" == typeof e.ranges)
    ) {
      for (s in e.ranges) {
        (o =
          "string" == typeof e.ranges[s][0]
            ? j(e.ranges[s][0], this.locale.format)
            : j(e.ranges[s][0])),
          (i =
            "string" == typeof e.ranges[s][1]
              ? j(e.ranges[s][1], this.locale.format)
              : j(e.ranges[s][1])),
          this.minDate &&
            o.isBefore(this.minDate) &&
            (o = this.minDate.clone());
        var l,
          c,
          d = this.maxDate;
        this.maxSpan &&
          d &&
          o.clone().add(this.maxSpan).isAfter(d) &&
          (d = o.clone().add(this.maxSpan)),
          d && i.isAfter(d) && (i = d.clone()),
          (this.minDate &&
            i.isBefore(this.minDate, this.timepicker ? "minute" : "day")) ||
            (d && o.isAfter(d, this.timepicker ? "minute" : "day")) ||
            (((l = document.createElement("textarea")).innerHTML = s),
            (c = l.value),
            (this.ranges[c] = [o, i]));
      }
      var m = "<ul>";
      for (s in this.ranges)
        m += '<li data-range-key="' + s + '">' + s + "</li>";
      this.showCustomRangeLabel &&
        (m +=
          '<li data-range-key="' +
          this.locale.customRangeLabel +
          '">' +
          this.locale.customRangeLabel +
          "</li>"),
        (m += "</ul>"),
        this.container.find(".ranges").prepend(m);
    }
    "function" == typeof a && (this.callback = a),
      this.timePicker ||
        ((this.startDate = this.startDate.startOf("day")),
        (this.endDate = this.endDate.endOf("day")),
        this.container.find(".calendar-time").hide()),
      this.timePicker && this.autoApply && (this.autoApply = !1),
      this.autoApply && this.container.addClass("auto-apply"),
      "object" == typeof e.ranges && this.container.addClass("show-ranges"),
      this.singleDatePicker &&
        (this.container.addClass("single"),
        this.container.find(".drp-calendar.left").addClass("single"),
        this.container.find(".drp-calendar.left").show(),
        this.container.find(".drp-calendar.right").hide(),
        !this.timePicker &&
          this.autoApply &&
          this.container.addClass("auto-apply")),
      ((void 0 === e.ranges && !this.singleDatePicker) ||
        this.alwaysShowCalendars) &&
        this.container.addClass("show-calendar"),
      this.container.addClass("opens" + this.opens),
      this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses),
      this.applyButtonClasses.length &&
        this.container.find(".applyBtn").addClass(this.applyButtonClasses),
      this.cancelButtonClasses.length &&
        this.container.find(".cancelBtn").addClass(this.cancelButtonClasses),
      this.container.find(".applyBtn").html(this.locale.applyLabel),
      this.container.find(".cancelBtn").html(this.locale.cancelLabel),
      this.container
        .find(".drp-calendar")
        .on("click.daterangepicker", ".prev", R.proxy(this.clickPrev, this))
        .on("click.daterangepicker", ".next", R.proxy(this.clickNext, this))
        .on(
          "mousedown.daterangepicker",
          "td.available",
          R.proxy(this.clickDate, this)
        )
        .on(
          "mouseenter.daterangepicker",
          "td.available",
          R.proxy(this.hoverDate, this)
        )
        .on(
          "change.daterangepicker",
          "select.yearselect",
          R.proxy(this.monthOrYearChanged, this)
        )
        .on(
          "change.daterangepicker",
          "select.monthselect",
          R.proxy(this.monthOrYearChanged, this)
        )
        .on(
          "change.daterangepicker",
          "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect",
          R.proxy(this.timeChanged, this)
        ),
      this.container
        .find(".ranges")
        .on("click.daterangepicker", "li", R.proxy(this.clickRange, this)),
      this.container
        .find(".drp-buttons")
        .on(
          "click.daterangepicker",
          "button.applyBtn",
          R.proxy(this.clickApply, this)
        )
        .on(
          "click.daterangepicker",
          "button.cancelBtn",
          R.proxy(this.clickCancel, this)
        ),
      this.element.is("input") || this.element.is("button")
        ? this.element.on({
            "click.daterangepicker": R.proxy(this.show, this),
            "focus.daterangepicker": R.proxy(this.show, this),
            "keyup.daterangepicker": R.proxy(this.elementChanged, this),
            "keydown.daterangepicker": R.proxy(this.keydown, this),
          })
        : (this.element.on("click.daterangepicker", R.proxy(this.toggle, this)),
          this.element.on(
            "keydown.daterangepicker",
            R.proxy(this.toggle, this)
          )),
      this.updateElement();
  }
  return (
    (i.prototype = {
      constructor: i,
      setStartDate: function (t) {
        "string" == typeof t && (this.startDate = j(t, this.locale.format)),
          "object" == typeof t && (this.startDate = j(t)),
          this.timePicker || (this.startDate = this.startDate.startOf("day")),
          this.timePicker &&
            this.timePickerIncrement &&
            this.startDate.minute(
              Math.round(this.startDate.minute() / this.timePickerIncrement) *
                this.timePickerIncrement
            ),
          this.minDate &&
            this.startDate.isBefore(this.minDate) &&
            ((this.startDate = this.minDate.clone()),
            this.timePicker &&
              this.timePickerIncrement &&
              this.startDate.minute(
                Math.round(this.startDate.minute() / this.timePickerIncrement) *
                  this.timePickerIncrement
              )),
          this.maxDate &&
            this.startDate.isAfter(this.maxDate) &&
            ((this.startDate = this.maxDate.clone()),
            this.timePicker &&
              this.timePickerIncrement &&
              this.startDate.minute(
                Math.floor(this.startDate.minute() / this.timePickerIncrement) *
                  this.timePickerIncrement
              )),
          this.isShowing || this.updateElement(),
          this.updateMonthsInView();
      },
      setEndDate: function (t) {
        "string" == typeof t && (this.endDate = j(t, this.locale.format)),
          "object" == typeof t && (this.endDate = j(t)),
          this.timePicker || (this.endDate = this.endDate.endOf("day")),
          this.timePicker &&
            this.timePickerIncrement &&
            this.endDate.minute(
              Math.round(this.endDate.minute() / this.timePickerIncrement) *
                this.timePickerIncrement
            ),
          this.endDate.isBefore(this.startDate) &&
            (this.endDate = this.startDate.clone()),
          this.maxDate &&
            this.endDate.isAfter(this.maxDate) &&
            (this.endDate = this.maxDate.clone()),
          this.maxSpan &&
            this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) &&
            (this.endDate = this.startDate.clone().add(this.maxSpan)),
          (this.previousRightTime = this.endDate.clone()),
          this.container
            .find(".drp-selected")
            .html(
              this.startDate.format(this.locale.format) +
                this.locale.separator +
                this.endDate.format(this.locale.format)
            ),
          this.isShowing || this.updateElement(),
          this.updateMonthsInView();
      },
      isInvalidDate: function () {
        return !1;
      },
      isCustomDate: function () {
        return !1;
      },
      updateView: function () {
        this.timePicker &&
          (this.renderTimePicker("left"),
          this.renderTimePicker("right"),
          this.endDate
            ? this.container
                .find(".right .calendar-time select")
                .prop("disabled", !1)
                .removeClass("disabled")
            : this.container
                .find(".right .calendar-time select")
                .prop("disabled", !0)
                .addClass("disabled")),
          this.endDate &&
            this.container
              .find(".drp-selected")
              .html(
                this.startDate.format(this.locale.format) +
                  this.locale.separator +
                  this.endDate.format(this.locale.format)
              ),
          this.updateMonthsInView(),
          this.updateCalendars(),
          this.updateFormInputs();
      },
      updateMonthsInView: function () {
        if (this.endDate) {
          if (
            !this.singleDatePicker &&
            this.leftCalendar.month &&
            this.rightCalendar.month &&
            (this.startDate.format("YYYY-MM") ==
              this.leftCalendar.month.format("YYYY-MM") ||
              this.startDate.format("YYYY-MM") ==
                this.rightCalendar.month.format("YYYY-MM")) &&
            (this.endDate.format("YYYY-MM") ==
              this.leftCalendar.month.format("YYYY-MM") ||
              this.endDate.format("YYYY-MM") ==
                this.rightCalendar.month.format("YYYY-MM"))
          )
            return;
          (this.leftCalendar.month = this.startDate.clone().date(2)),
            this.linkedCalendars ||
            (this.endDate.month() == this.startDate.month() &&
              this.endDate.year() == this.startDate.year())
              ? (this.rightCalendar.month = this.startDate
                  .clone()
                  .date(2)
                  .add(1, "month"))
              : (this.rightCalendar.month = this.endDate.clone().date(2));
        } else
          this.leftCalendar.month.format("YYYY-MM") !=
            this.startDate.format("YYYY-MM") &&
            this.rightCalendar.month.format("YYYY-MM") !=
              this.startDate.format("YYYY-MM") &&
            ((this.leftCalendar.month = this.startDate.clone().date(2)),
            (this.rightCalendar.month = this.startDate
              .clone()
              .date(2)
              .add(1, "month")));
        this.maxDate &&
          this.linkedCalendars &&
          !this.singleDatePicker &&
          this.rightCalendar.month > this.maxDate &&
          ((this.rightCalendar.month = this.maxDate.clone().date(2)),
          (this.leftCalendar.month = this.maxDate
            .clone()
            .date(2)
            .subtract(1, "month")));
      },
      updateCalendars: function () {
        var t, e, a, i;
        this.timePicker &&
          (this.endDate
            ? ((e = parseInt(
                this.container.find(".left .hourselect").val(),
                10
              )),
              (a = parseInt(
                this.container.find(".left .minuteselect").val(),
                10
              )),
              isNaN(a) &&
                (a = parseInt(
                  this.container.find(".left .minuteselect option:last").val(),
                  10
                )),
              (t = this.timePickerSeconds
                ? parseInt(this.container.find(".left .secondselect").val(), 10)
                : 0),
              this.timePicker24Hour ||
                ("PM" ===
                  (i = this.container.find(".left .ampmselect").val()) &&
                  e < 12 &&
                  (e += 12),
                "AM" === i && 12 === e && (e = 0)))
            : ((e = parseInt(
                this.container.find(".right .hourselect").val(),
                10
              )),
              (a = parseInt(
                this.container.find(".right .minuteselect").val(),
                10
              )),
              isNaN(a) &&
                (a = parseInt(
                  this.container.find(".right .minuteselect option:last").val(),
                  10
                )),
              (t = this.timePickerSeconds
                ? parseInt(
                    this.container.find(".right .secondselect").val(),
                    10
                  )
                : 0),
              this.timePicker24Hour ||
                ("PM" ===
                  (i = this.container.find(".right .ampmselect").val()) &&
                  e < 12 &&
                  (e += 12),
                "AM" === i && 12 === e && (e = 0))),
          this.leftCalendar.month.hour(e).minute(a).second(t),
          this.rightCalendar.month.hour(e).minute(a).second(t)),
          this.renderCalendar("left"),
          this.renderCalendar("right"),
          this.container.find(".ranges li").removeClass("active"),
          null != this.endDate && this.calculateChosenLabel();
      },
      renderCalendar: function (t) {
        var e = "left" == t ? this.leftCalendar : this.rightCalendar,
          a = e.month.month(),
          i = e.month.year(),
          s = e.month.hour(),
          n = e.month.minute(),
          r = e.month.second(),
          o = j([i, a]).daysInMonth(),
          h = j([i, a, 1]),
          l = j([i, a, o]),
          c = j(h).subtract(1, "month").month(),
          d = j(h).subtract(1, "month").year(),
          m = j([d, c]).daysInMonth(),
          p = h.day();
        ((e = []).firstDay = h), (e.lastDay = l);
        for (var f = 0; f < 6; f++) e[f] = [];
        var u = m - p + this.locale.firstDay + 1;
        m < u && (u -= 7), p == this.locale.firstDay && (u = m - 6);
        for (
          var D = j([d, c, u, 12, n, r]), f = 0, g = 0, y = 0;
          f < 42;
          f++, g++, D = j(D).add(24, "hour")
        )
          0 < f && g % 7 == 0 && ((g = 0), y++),
            (e[y][g] = D.clone().hour(s).minute(n).second(r)),
            D.hour(12),
            this.minDate &&
              e[y][g].format("YYYY-MM-DD") ==
                this.minDate.format("YYYY-MM-DD") &&
              e[y][g].isBefore(this.minDate) &&
              "left" == t &&
              (e[y][g] = this.minDate.clone()),
            this.maxDate &&
              e[y][g].format("YYYY-MM-DD") ==
                this.maxDate.format("YYYY-MM-DD") &&
              e[y][g].isAfter(this.maxDate) &&
              "right" == t &&
              (e[y][g] = this.maxDate.clone());
        "left" == t
          ? (this.leftCalendar.calendar = e)
          : (this.rightCalendar.calendar = e);
        var k = "left" == t ? this.minDate : this.startDate,
          b = this.maxDate,
          C =
            ("left" == t ? this.startDate : this.endDate,
            this.locale.direction,
            '<table class="table-condensed">');
        (C += "<thead>"),
          (C += "<tr>"),
          (this.showWeekNumbers || this.showISOWeekNumbers) &&
            (C += "<th></th>"),
          (k && !k.isBefore(e.firstDay)) ||
          (this.linkedCalendars && "left" != t)
            ? (C += "<th></th>")
            : (C += '<th class="prev available"><span></span></th>');
        var v,
          Y = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
        if (this.showDropdowns) {
          for (
            var w = e[1][1].month(),
              P = e[1][1].year(),
              x = (b && b.year()) || this.maxYear,
              M = (k && k.year()) || this.minYear,
              I = P == M,
              S = P == x,
              B = '<select class="monthselect">',
              A = 0;
            A < 12;
            A++
          )
            (!I || (k && A >= k.month())) && (!S || (b && A <= b.month()))
              ? (B +=
                  "<option value='" +
                  A +
                  "'" +
                  (A === w ? " selected='selected'" : "") +
                  ">" +
                  this.locale.monthNames[A] +
                  "</option>")
              : (B +=
                  "<option value='" +
                  A +
                  "'" +
                  (A === w ? " selected='selected'" : "") +
                  " disabled='disabled'>" +
                  this.locale.monthNames[A] +
                  "</option>");
          B += "</select>";
          for (var L = '<select class="yearselect">', N = M; N <= x; N++)
            L +=
              '<option value="' +
              N +
              '"' +
              (N === P ? ' selected="selected"' : "") +
              ">" +
              N +
              "</option>";
          Y = B + (L += "</select>");
        }
        (C += '<th colspan="5" class="month">' + Y + "</th>"),
          (b && !b.isAfter(e.lastDay)) ||
          (this.linkedCalendars && "right" != t && !this.singleDatePicker)
            ? (C += "<th></th>")
            : (C += '<th class="next available"><span></span></th>'),
          (C += "</tr>"),
          (C += "<tr>"),
          (this.showWeekNumbers || this.showISOWeekNumbers) &&
            (C += '<th class="week">' + this.locale.weekLabel + "</th>"),
          R.each(this.locale.daysOfWeek, function (t, e) {
            C += "<th>" + e + "</th>";
          }),
          (C += "</tr>"),
          (C += "</thead>"),
          (C += "<tbody>"),
          null == this.endDate &&
            this.maxSpan &&
            ((v = this.startDate.clone().add(this.maxSpan).endOf("day")),
            (b && !v.isBefore(b)) || (b = v));
        for (y = 0; y < 6; y++) {
          (C += "<tr>"),
            this.showWeekNumbers
              ? (C += '<td class="week">' + e[y][0].week() + "</td>")
              : this.showISOWeekNumbers &&
                (C += '<td class="week">' + e[y][0].isoWeek() + "</td>");
          for (g = 0; g < 7; g++) {
            var E = [];
            e[y][g].isSame(new Date(), "day") && E.push("today"),
              5 < e[y][g].isoWeekday() && E.push("weekend"),
              e[y][g].month() != e[1][1].month() && E.push("off", "ends"),
              this.minDate &&
                e[y][g].isBefore(this.minDate, "day") &&
                E.push("off", "disabled"),
              b && e[y][g].isAfter(b, "day") && E.push("off", "disabled"),
              this.isInvalidDate(e[y][g]) && E.push("off", "disabled"),
              e[y][g].format("YYYY-MM-DD") ==
                this.startDate.format("YYYY-MM-DD") &&
                E.push("active", "start-date"),
              null != this.endDate &&
                e[y][g].format("YYYY-MM-DD") ==
                  this.endDate.format("YYYY-MM-DD") &&
                E.push("active", "end-date"),
              null != this.endDate &&
                e[y][g] > this.startDate &&
                e[y][g] < this.endDate &&
                E.push("in-range");
            var O = this.isCustomDate(e[y][g]);
            !1 !== O &&
              ("string" == typeof O
                ? E.push(O)
                : Array.prototype.push.apply(E, O));
            for (var W = "", H = !1, f = 0; f < E.length; f++)
              (W += E[f] + " "), "disabled" == E[f] && (H = !0);
            H || (W += "available"),
              (C +=
                '<td class="' +
                W.replace(/^\s+|\s+$/g, "") +
                '" data-title="r' +
                y +
                "c" +
                g +
                '">' +
                e[y][g].date() +
                "</td>");
          }
          C += "</tr>";
        }
        (C += "</tbody>"),
          (C += "</table>"),
          this.container
            .find(".drp-calendar." + t + " .calendar-table")
            .html(C);
      },
      renderTimePicker: function (t) {
        if ("right" != t || this.endDate) {
          var e,
            a,
            i,
            s,
            n,
            r = this.maxDate;
          !this.maxSpan ||
            (this.maxDate &&
              !this.startDate
                .clone()
                .add(this.maxSpan)
                .isBefore(this.maxDate)) ||
            (r = this.startDate.clone().add(this.maxSpan)),
            "left" == t
              ? ((a = this.startDate.clone()), (i = this.minDate))
              : "right" == t &&
                ((a = this.endDate.clone()),
                (i = this.startDate),
                "" !=
                  (s = this.container.find(
                    ".drp-calendar.right .calendar-time"
                  )).html() &&
                  (a.hour(
                    isNaN(a.hour())
                      ? s.find(".hourselect option:selected").val()
                      : a.hour()
                  ),
                  a.minute(
                    isNaN(a.minute())
                      ? s.find(".minuteselect option:selected").val()
                      : a.minute()
                  ),
                  a.second(
                    isNaN(a.second())
                      ? s.find(".secondselect option:selected").val()
                      : a.second()
                  ),
                  this.timePicker24Hour ||
                    ("PM" ===
                      (n = s.find(".ampmselect option:selected").val()) &&
                      a.hour() < 12 &&
                      a.hour(a.hour() + 12),
                    "AM" === n && 12 === a.hour() && a.hour(0))),
                a.isBefore(this.startDate) && (a = this.startDate.clone()),
                r && a.isAfter(r) && (a = r.clone())),
            (e = '<select class="hourselect">');
          for (
            var o = this.timePicker24Hour ? 0 : 1,
              h = this.timePicker24Hour ? 23 : 12,
              l = o;
            l <= h;
            l++
          ) {
            var c = l;
            this.timePicker24Hour ||
              (c = 12 <= a.hour() ? (12 == l ? 12 : l + 12) : 12 == l ? 0 : l);
            var d = a.clone().hour(c),
              m = !1;
            i && d.minute(59).isBefore(i) && (m = !0),
              r && d.minute(0).isAfter(r) && (m = !0),
              c != a.hour() || m
                ? (e += m
                    ? '<option value="' +
                      l +
                      '" disabled="disabled" class="disabled">' +
                      l +
                      "</option>"
                    : '<option value="' + l + '">' + l + "</option>")
                : (e +=
                    '<option value="' +
                    l +
                    '" selected="selected">' +
                    l +
                    "</option>");
          }
          (e += "</select> "), (e += ': <select class="minuteselect">');
          for (var p, f, l = 0; l < 60; l += this.timePickerIncrement) {
            var u = l < 10 ? "0" + l : l,
              d = a.clone().minute(l),
              m = !1;
            i && d.second(59).isBefore(i) && (m = !0),
              r && d.second(0).isAfter(r) && (m = !0),
              a.minute() != l || m
                ? (e += m
                    ? '<option value="' +
                      l +
                      '" disabled="disabled" class="disabled">' +
                      u +
                      "</option>"
                    : '<option value="' + l + '">' + u + "</option>")
                : (e +=
                    '<option value="' +
                    l +
                    '" selected="selected">' +
                    u +
                    "</option>");
          }
          if (((e += "</select> "), this.timePickerSeconds)) {
            e += ': <select class="secondselect">';
            for (l = 0; l < 60; l++) {
              (u = l < 10 ? "0" + l : l), (d = a.clone().second(l)), (m = !1);
              i && d.isBefore(i) && (m = !0),
                r && d.isAfter(r) && (m = !0),
                a.second() != l || m
                  ? (e += m
                      ? '<option value="' +
                        l +
                        '" disabled="disabled" class="disabled">' +
                        u +
                        "</option>"
                      : '<option value="' + l + '">' + u + "</option>")
                  : (e +=
                      '<option value="' +
                      l +
                      '" selected="selected">' +
                      u +
                      "</option>");
            }
            e += "</select> ";
          }
          this.timePicker24Hour ||
            ((e += '<select class="ampmselect">'),
            (f = p = ""),
            i &&
              a.clone().hour(12).minute(0).second(0).isBefore(i) &&
              (p = ' disabled="disabled" class="disabled"'),
            r &&
              a.clone().hour(0).minute(0).second(0).isAfter(r) &&
              (f = ' disabled="disabled" class="disabled"'),
            12 <= a.hour()
              ? (e +=
                  '<option value="AM"' +
                  p +
                  '>AM</option><option value="PM" selected="selected"' +
                  f +
                  ">PM</option>")
              : (e +=
                  '<option value="AM" selected="selected"' +
                  p +
                  '>AM</option><option value="PM"' +
                  f +
                  ">PM</option>"),
            (e += "</select>")),
            this.container
              .find(".drp-calendar." + t + " .calendar-time")
              .html(e);
        }
      },
      updateFormInputs: function () {
        this.singleDatePicker ||
        (this.endDate &&
          (this.startDate.isBefore(this.endDate) ||
            this.startDate.isSame(this.endDate)))
          ? this.container.find("button.applyBtn").prop("disabled", !1)
          : this.container.find("button.applyBtn").prop("disabled", !0);
      },
      move: function () {
        var t,
          e = { top: 0, left: 0 },
          a = this.drops,
          i = R(window).width();
        switch (
          (this.parentEl.is("body") ||
            ((e = {
              top: this.parentEl.offset().top - this.parentEl.scrollTop(),
              left: this.parentEl.offset().left - this.parentEl.scrollLeft(),
            }),
            (i = this.parentEl[0].clientWidth + this.parentEl.offset().left)),
          a)
        ) {
          case "auto":
            (t =
              this.element.offset().top + this.element.outerHeight() - e.top) +
              this.container.outerHeight() >=
              this.parentEl[0].scrollHeight &&
              ((t =
                this.element.offset().top -
                this.container.outerHeight() -
                e.top),
              (a = "up"));
            break;
          case "up":
            t =
              this.element.offset().top - this.container.outerHeight() - e.top;
            break;
          default:
            t = this.element.offset().top + this.element.outerHeight() - e.top;
        }
        this.container.css({ top: 0, left: 0, right: "auto" });
        var s,
          n,
          r = this.container.outerWidth();
        this.container.toggleClass("drop-up", "up" == a),
          "left" == this.opens
            ? r +
                (s =
                  i - this.element.offset().left - this.element.outerWidth()) >
              R(window).width()
              ? this.container.css({ top: t, right: "auto", left: 9 })
              : this.container.css({ top: t, right: s, left: "auto" })
            : "center" == this.opens
            ? (n =
                this.element.offset().left -
                e.left +
                this.element.outerWidth() / 2 -
                r / 2) < 0
              ? this.container.css({ top: t, right: "auto", left: 9 })
              : n + r > R(window).width()
              ? this.container.css({ top: t, left: "auto", right: 0 })
              : this.container.css({ top: t, left: n, right: "auto" })
            : (n = this.element.offset().left - e.left) + r > R(window).width()
            ? this.container.css({ top: t, left: "auto", right: 0 })
            : this.container.css({ top: t, left: n, right: "auto" });
      },
      show: function (t) {
        this.isShowing ||
          ((this._outsideClickProxy = R.proxy(function (t) {
            this.outsideClick(t);
          }, this)),
          R(document)
            .on("mousedown.daterangepicker", this._outsideClickProxy)
            .on("touchend.daterangepicker", this._outsideClickProxy)
            .on(
              "click.daterangepicker",
              "[data-toggle=dropdown]",
              this._outsideClickProxy
            )
            .on("focusin.daterangepicker", this._outsideClickProxy),
          R(window).on(
            "resize.daterangepicker",
            R.proxy(function (t) {
              this.move(t);
            }, this)
          ),
          (this.oldStartDate = this.startDate.clone()),
          (this.oldEndDate = this.endDate.clone()),
          (this.previousRightTime = this.endDate.clone()),
          this.updateView(),
          this.container.show(),
          this.move(),
          this.element.trigger("show.daterangepicker", this),
          (this.isShowing = !0));
      },
      hide: function (t) {
        this.isShowing &&
          (this.endDate ||
            ((this.startDate = this.oldStartDate.clone()),
            (this.endDate = this.oldEndDate.clone())),
          (this.startDate.isSame(this.oldStartDate) &&
            this.endDate.isSame(this.oldEndDate)) ||
            this.callback(
              this.startDate.clone(),
              this.endDate.clone(),
              this.chosenLabel
            ),
          this.updateElement(),
          R(document).off(".daterangepicker"),
          R(window).off(".daterangepicker"),
          this.container.hide(),
          this.element.trigger("hide.daterangepicker", this),
          (this.isShowing = !1));
      },
      toggle: function (t) {
        this.isShowing ? this.hide() : this.show();
      },
      outsideClick: function (t) {
        var e = R(t.target);
        "focusin" == t.type ||
          e.closest(this.element).length ||
          e.closest(this.container).length ||
          e.closest(".calendar-table").length ||
          (this.hide(),
          this.element.trigger("outsideClick.daterangepicker", this));
      },
      showCalendars: function () {
        this.container.addClass("show-calendar"),
          this.move(),
          this.element.trigger("showCalendar.daterangepicker", this);
      },
      hideCalendars: function () {
        this.container.removeClass("show-calendar"),
          this.element.trigger("hideCalendar.daterangepicker", this);
      },
      clickRange: function (t) {
        var e,
          a = t.target.getAttribute("data-range-key");
        (this.chosenLabel = a) == this.locale.customRangeLabel
          ? this.showCalendars()
          : ((e = this.ranges[a]),
            (this.startDate = e[0]),
            (this.endDate = e[1]),
            this.timePicker ||
              (this.startDate.startOf("day"), this.endDate.endOf("day")),
            this.alwaysShowCalendars || this.hideCalendars(),
            this.clickApply());
      },
      clickPrev: function (t) {
        R(t.target).parents(".drp-calendar").hasClass("left")
          ? (this.leftCalendar.month.subtract(1, "month"),
            this.linkedCalendars &&
              this.rightCalendar.month.subtract(1, "month"))
          : this.rightCalendar.month.subtract(1, "month"),
          this.updateCalendars();
      },
      clickNext: function (t) {
        R(t.target).parents(".drp-calendar").hasClass("left")
          ? this.leftCalendar.month.add(1, "month")
          : (this.rightCalendar.month.add(1, "month"),
            this.linkedCalendars && this.leftCalendar.month.add(1, "month")),
          this.updateCalendars();
      },
      hoverDate: function (t) {
        var e, a, i, r, o, h, l;
        R(t.target).hasClass("available") &&
          ((a = (e = R(t.target).attr("data-title")).substr(1, 1)),
          (i = e.substr(3, 1)),
          (r = R(t.target).parents(".drp-calendar").hasClass("left")
            ? this.leftCalendar.calendar[a][i]
            : this.rightCalendar.calendar[a][i]),
          (o = this.leftCalendar),
          (h = this.rightCalendar),
          (l = this.startDate),
          this.endDate ||
            this.container.find(".drp-calendar tbody td").each(function (t, e) {
              var a, i, s, n;
              R(e).hasClass("week") ||
                ((i = (a = R(e).attr("data-title")).substr(1, 1)),
                (s = a.substr(3, 1)),
                ((n = R(e).parents(".drp-calendar").hasClass("left")
                  ? o.calendar[i][s]
                  : h.calendar[i][s]).isAfter(l) &&
                  n.isBefore(r)) ||
                n.isSame(r, "day")
                  ? R(e).addClass("in-range")
                  : R(e).removeClass("in-range"));
            }));
      },
      clickDate: function (t) {
        var e, a, i, s, n, r, o, h;
        R(t.target).hasClass("available") &&
          ((a = (e = R(t.target).attr("data-title")).substr(1, 1)),
          (i = e.substr(3, 1)),
          (s = R(t.target).parents(".drp-calendar").hasClass("left")
            ? this.leftCalendar.calendar[a][i]
            : this.rightCalendar.calendar[a][i]),
          this.endDate || s.isBefore(this.startDate, "day")
            ? (this.timePicker &&
                ((n = parseInt(
                  this.container.find(".left .hourselect").val(),
                  10
                )),
                this.timePicker24Hour ||
                  ("PM" ===
                    (r = this.container.find(".left .ampmselect").val()) &&
                    n < 12 &&
                    (n += 12),
                  "AM" === r && 12 === n && (n = 0)),
                (o = parseInt(
                  this.container.find(".left .minuteselect").val(),
                  10
                )),
                isNaN(o) &&
                  (o = parseInt(
                    this.container
                      .find(".left .minuteselect option:last")
                      .val(),
                    10
                  )),
                (h = this.timePickerSeconds
                  ? parseInt(
                      this.container.find(".left .secondselect").val(),
                      10
                    )
                  : 0),
                (s = s.clone().hour(n).minute(o).second(h))),
              (this.endDate = null),
              this.setStartDate(s.clone()))
            : !this.endDate && s.isBefore(this.startDate)
            ? this.setEndDate(this.startDate.clone())
            : (this.timePicker &&
                ((n = parseInt(
                  this.container.find(".right .hourselect").val(),
                  10
                )),
                this.timePicker24Hour ||
                  ("PM" ===
                    (r = this.container.find(".right .ampmselect").val()) &&
                    n < 12 &&
                    (n += 12),
                  "AM" === r && 12 === n && (n = 0)),
                (o = parseInt(
                  this.container.find(".right .minuteselect").val(),
                  10
                )),
                isNaN(o) &&
                  (o = parseInt(
                    this.container
                      .find(".right .minuteselect option:last")
                      .val(),
                    10
                  )),
                (h = this.timePickerSeconds
                  ? parseInt(
                      this.container.find(".right .secondselect").val(),
                      10
                    )
                  : 0),
                (s = s.clone().hour(n).minute(o).second(h))),
              this.setEndDate(s.clone()),
              this.autoApply &&
                (this.calculateChosenLabel(), this.clickApply())),
          this.singleDatePicker &&
            (this.setEndDate(this.startDate),
            !this.timePicker && this.autoApply && this.clickApply()),
          this.updateView(),
          t.stopPropagation());
      },
      calculateChosenLabel: function () {
        var t = !0,
          e = 0;
        for (var a in this.ranges) {
          if (this.timePicker) {
            var i = this.timePickerSeconds
              ? "YYYY-MM-DD HH:mm:ss"
              : "YYYY-MM-DD HH:mm";
            if (
              this.startDate.format(i) == this.ranges[a][0].format(i) &&
              this.endDate.format(i) == this.ranges[a][1].format(i)
            ) {
              (t = !1),
                (this.chosenLabel = this.container
                  .find(".ranges li:eq(" + e + ")")
                  .addClass("active")
                  .attr("data-range-key"));
              break;
            }
          } else if (
            this.startDate.format("YYYY-MM-DD") ==
              this.ranges[a][0].format("YYYY-MM-DD") &&
            this.endDate.format("YYYY-MM-DD") ==
              this.ranges[a][1].format("YYYY-MM-DD")
          ) {
            (t = !1),
              (this.chosenLabel = this.container
                .find(".ranges li:eq(" + e + ")")
                .addClass("active")
                .attr("data-range-key"));
            break;
          }
          e++;
        }
        t &&
          (this.showCustomRangeLabel
            ? (this.chosenLabel = this.container
                .find(".ranges li:last")
                .addClass("active")
                .attr("data-range-key"))
            : (this.chosenLabel = null),
          this.showCalendars());
      },
      clickApply: function (t) {
        this.hide(), this.element.trigger("apply.daterangepicker", this);
      },
      clickCancel: function (t) {
        (this.startDate = this.oldStartDate),
          (this.endDate = this.oldEndDate),
          this.hide(),
          this.element.trigger("cancel.daterangepicker", this);
      },
      monthOrYearChanged: function (t) {
        var e = R(t.target).closest(".drp-calendar").hasClass("left"),
          a = e ? "left" : "right",
          i = this.container.find(".drp-calendar." + a),
          s = parseInt(i.find(".monthselect").val(), 10),
          n = i.find(".yearselect").val();
        e ||
          ((n < this.startDate.year() ||
            (n == this.startDate.year() && s < this.startDate.month())) &&
            ((s = this.startDate.month()), (n = this.startDate.year()))),
          this.minDate &&
            (n < this.minDate.year() ||
              (n == this.minDate.year() && s < this.minDate.month())) &&
            ((s = this.minDate.month()), (n = this.minDate.year())),
          this.maxDate &&
            (n > this.maxDate.year() ||
              (n == this.maxDate.year() && s > this.maxDate.month())) &&
            ((s = this.maxDate.month()), (n = this.maxDate.year())),
          e
            ? (this.leftCalendar.month.month(s).year(n),
              this.linkedCalendars &&
                (this.rightCalendar.month = this.leftCalendar.month
                  .clone()
                  .add(1, "month")))
            : (this.rightCalendar.month.month(s).year(n),
              this.linkedCalendars &&
                (this.leftCalendar.month = this.rightCalendar.month
                  .clone()
                  .subtract(1, "month"))),
          this.updateCalendars();
      },
      timeChanged: function (t) {
        var e = R(t.target).closest(".drp-calendar"),
          a = e.hasClass("left"),
          i = parseInt(e.find(".hourselect").val(), 10),
          s = parseInt(e.find(".minuteselect").val(), 10);
        isNaN(s) &&
          (s = parseInt(e.find(".minuteselect option:last").val(), 10));
        var n,
          r,
          o,
          h = this.timePickerSeconds
            ? parseInt(e.find(".secondselect").val(), 10)
            : 0;
        this.timePicker24Hour ||
          ("PM" === (n = e.find(".ampmselect").val()) && i < 12 && (i += 12),
          "AM" === n && 12 === i && (i = 0)),
          a
            ? ((r = this.startDate.clone()).hour(i),
              r.minute(s),
              r.second(h),
              this.setStartDate(r),
              this.singleDatePicker
                ? (this.endDate = this.startDate.clone())
                : this.endDate &&
                  this.endDate.format("YYYY-MM-DD") == r.format("YYYY-MM-DD") &&
                  this.endDate.isBefore(r) &&
                  this.setEndDate(r.clone()))
            : this.endDate &&
              ((o = this.endDate.clone()).hour(i),
              o.minute(s),
              o.second(h),
              this.setEndDate(o)),
          this.updateCalendars(),
          this.updateFormInputs(),
          this.renderTimePicker("left"),
          this.renderTimePicker("right");
      },
      elementChanged: function () {
        var t, e, a;
        this.element.is("input") &&
          this.element.val().length &&
          ((a = e = null),
          2 === (t = this.element.val().split(this.locale.separator)).length &&
            ((e = j(t[0], this.locale.format)),
            (a = j(t[1], this.locale.format))),
          (!this.singleDatePicker && null !== e && null !== a) ||
            (a = e = j(this.element.val(), this.locale.format)),
          e.isValid() &&
            a.isValid() &&
            (this.setStartDate(e), this.setEndDate(a), this.updateView()));
      },
      keydown: function (t) {
        (9 !== t.keyCode && 13 !== t.keyCode) || this.hide(),
          27 === t.keyCode &&
            (t.preventDefault(), t.stopPropagation(), this.hide());
      },
      updateElement: function () {
        var t;
        this.element.is("input") &&
          this.autoUpdateInput &&
          ((t = this.startDate.format(this.locale.format)),
          this.singleDatePicker ||
            (t +=
              this.locale.separator + this.endDate.format(this.locale.format)),
          t !== this.element.val() && this.element.val(t).trigger("change"));
      },
      remove: function () {
        this.container.remove(),
          this.element.off(".daterangepicker"),
          this.element.removeData();
      },
    }),
    (R.fn.daterangepicker = function (t, e) {
      var a = R.extend(!0, {}, R.fn.daterangepicker.defaultOptions, t);
      return (
        this.each(function () {
          var t = R(this);
          t.data("daterangepicker") && t.data("daterangepicker").remove(),
            t.data("daterangepicker", new i(t, a, e));
        }),
        this
      );
    }),
    i
  );
});
